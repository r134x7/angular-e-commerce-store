import { Injectable } from '@angular/core';
import { categories } from './mock-category';
import { Category } from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Category[] {
    return categories;
  }
}
