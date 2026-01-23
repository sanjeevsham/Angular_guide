import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding-to-child',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-to-child.component.html',
  styleUrl: './data-binding-to-child.component.scss'
})
export class DataBindingToChildComponent {
  // Inputs from Parent
  @Input() productName: string = '';
  @Input() price: number = 0;

  // Output to Parent
  @Output() addToCart = new EventEmitter<string>();

  handleAddToCart() {
    this.addToCart.emit(this.productName);
  }
}
