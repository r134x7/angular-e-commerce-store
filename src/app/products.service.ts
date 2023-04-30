import { Injectable } from '@angular/core';
import { products } from './mock-product';
import { Product } from './models';
import { Observable, of } from "rxjs";

// provided in the root level of the app
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products service separates the implementation of retrieving the data from the component that uses it in the view


  constructor() { }

  getProducts(): Observable<Product[]> {
    const productsCall = of(products);
    return productsCall;
  }
}
