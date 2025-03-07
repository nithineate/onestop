import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cart.value;
    const existingItem = currentCart.find(item => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = currentCart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      this.cart.next(updatedCart);
    } else {
      this.cart.next([...currentCart, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    const updatedCart = this.cart.value.filter(item => item.product.id !== productId);
    this.cart.next(updatedCart);
  }

  updateQuantity(productId: number, quantity: number): void {
    const updatedCart = this.cart.value.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    this.cart.next(updatedCart);
  }

  getCartItemsCount(): number {
    return this.cart.value.reduce((sum, item) => sum + item.quantity, 0);
  }

  clearCart(): void {
    this.cart.next([]);
  }
}