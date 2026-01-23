import { Component, signal, computed, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  products: Product[] = [
    { id: 1, name: 'MacBook Pro', price: 1200, image: '💻' },
    { id: 2, name: 'Noise Cancelling Headphones', price: 250, image: '🎧' },
    { id: 3, name: 'Wireless Mouse', price: 50, image: '🖱️' },
    { id: 4, name: 'Mechanical Keyboard', price: 150, image: '⌨️' },
    { id: 5, name: '4K Monitor', price: 400, image: '🖥️' },
  ];
  private readonly _cart = signal<Product[]>([]);

  // 🔹 Read-only signal (best practice)
  cart = this._cart.asReadonly();

  // 🔹 Computed signal
  totalItems = computed(() => this.cart().length);

  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price, 0)
  );

  constructor() {
    // 🔹 Effect (side-effect)
    effect(() => {
      console.log('Cart changed:', this.cart());
    });
  }

  clearCart() {
    this._cart.set([]);
  }

  add(product: Product) {
    this._cart.update(items => [...items, product]);
  }

  remove(id: number) {
    this._cart.update(items => items.filter(p => p.id !== id));
  }
}
