import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../pages/models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Duplex } from 'stream';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    // this.cart.value.items = items;
    this.cart.next({ items }); //emit the value to cart, so that subscribed components can hear it
    this._snackBar.open('One item is added to cart', 'Ok', { duration: 3000 });
  }

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is clear.', 'Ok', { duration: 3000 });
  }

  removeFromCart(item: CartItem) {
    const filteredItems = this.cart.value.items.filter(
      (_item) => item.id !== _item.id
    );

    this.cart.next({ items: filteredItems });
    this._snackBar.open('Item removed.', 'Ok', { duration: 3000 });
  }
}
