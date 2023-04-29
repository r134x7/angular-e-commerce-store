import { Injectable } from '@angular/core';
import { products } from './mock-product';
import { Product } from './models';

// provided in the root level of the app
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products service separates the implementation of retrieving the data from the component that uses it in the view


  constructor() { }

  getProducts(): Product[] {
    return products;
  }
}
