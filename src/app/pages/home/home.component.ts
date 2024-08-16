import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cols = 1;
  onColumnsCountChange(newCols: number) {
    this.cols = newCols;
  }
}
