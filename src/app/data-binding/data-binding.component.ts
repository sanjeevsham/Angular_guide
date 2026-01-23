import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataBindingToChildComponent } from '../data-binding-to-child/data-binding-to-child.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, CommonModule, DataBindingToChildComponent, RouterLink],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  // 1. Interpolation
  bindingTitle = 'Data Binding in Angular';
  currentDate = new Date();
  value = '{{value}}'

  // 2. Property Binding
  imageUrl = 'https://picsum.photos/300/200';
  isButtonDisabled = false;

  // 3. Event Binding
  counter = 0;
  lastEventTime = 'Never';

  // 4. Two-Way Binding
  username = 'AngularUser';
  favoriteColor = '#10b981';

  // Methods
  toggleDisable() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }

  incrementCounter() {
    this.counter++;
    this.lastEventTime = new Date().toLocaleTimeString();
  }

  reset() {
    this.counter = 0;
    this.username = 'AngularUser';
    this.isButtonDisabled = false;
  }

  // 5. Parent-Child Communication
  cartCount = 0;
  lastItemAdded = '';

  onAddToCart(item: string) {
    this.cartCount++;
    this.lastItemAdded = item;
    // Update last event time to show interaction
    this.lastEventTime = new Date().toLocaleTimeString();
  }
}
