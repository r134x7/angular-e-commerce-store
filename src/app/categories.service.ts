import { Injectable } from '@angular/core';
import { categories } from './mock-category';
import { Category } from './models';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Observable<Category[]> {
    const categoriesCall = of(categories);
    return categoriesCall;
  }
}
