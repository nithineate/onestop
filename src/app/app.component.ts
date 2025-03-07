import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCartOpen = false;

  constructor(public cartService: CartService) {}

  get cartItemsCount(): number {
    return this.cartService.getCartItemsCount();
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
}