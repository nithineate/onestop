import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private mockCategories: Category[] = [
    {
      id: 'laptops',
      name: 'Laptops',
      description: 'High-performance computers for work and gaming',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    },
    {
      id: 'audio',
      name: 'Audio',
      description: 'Premium audio equipment for the best sound experience',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: 'wearables',
      name: 'Wearables',
      description: 'Smart devices for fitness and lifestyle',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
    }
  ];

  getCategories(): Observable<Category[]> {
    return of(this.mockCategories).pipe(delay(500));
  }
}