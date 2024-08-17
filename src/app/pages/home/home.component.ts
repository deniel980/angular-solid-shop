import { Component } from '@angular/core';

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

  onColumnsCountChange(newCols: number): void {
    this.cols = newCols;
    this.rowHeight = this.ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
