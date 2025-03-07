import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: "Modern Laptop",
      description: "Powerful laptop for all your computing needs",
      price: 999.99,
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      stock: 10
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "Premium sound quality with noise cancellation",
      price: 199.99,
      category: "Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      stock: 15
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Track your fitness and stay connected",
      price: 299.99,
      category: "Wearables",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      stock: 8
    }
  ];

  getProducts(category?: string): Observable<Product[]> {
    const filteredProducts = category
      ? this.mockProducts.filter(p => p.category === category)
      : this.mockProducts;
    return of(filteredProducts).pipe(delay(500));
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = this.mockProducts.find(p => p.id === id);
    return of(product).pipe(delay(500));
  }
}