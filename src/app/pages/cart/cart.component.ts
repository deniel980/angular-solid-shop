import { Component } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart: Cart = {
    items: [],
  };
  dataSource: Array<CartItem> = [];
  
  displayedColumns: Array<String> = [
    'imageUrl',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  reduceItemsCount(quantity: number): number {
    return quantity - 1;
  }

  increaseItemsCount(quantity: number): number {
    return quantity + 1;
  }

  removeItem(element: CartItem): void {}
}
