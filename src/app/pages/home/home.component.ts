import { Component, EventEmitter, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

  cols = 1;
  category: string | undefined;
  rowHeight: number = this.ROWS_HEIGHT[this.cols];

  constructor(private _cartService: CartService) {}

  onColumnsCountChange(newCols: number): void {
    this.cols = newCols;
    this.rowHeight = this.ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this._cartService.addToCart({
      imageUrl: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
