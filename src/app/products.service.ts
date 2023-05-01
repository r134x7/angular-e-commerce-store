import { Injectable } from '@angular/core';
import { products } from './mock-product';
import { Product } from './models';
import { Observable, of, filter, BehaviorSubject } from "rxjs";

// provided in the root level of the app
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products service separates the implementation of retrieving the data from the component that uses it in the view
  private source = new BehaviorSubject<Product[]>(products);
  currentValue = this.source.asObservable();
  

  constructor() { }

  // getProducts(): Observable<Product[]> {
  //   const productsCall = of(products);
  //   return productsCall;
  // }
  // getProducts() {
  //   const productsCall = this.currentValue.subscribe(elem => this.currentValue = of(products));
  //   console.log(productsCall);
    
  //   return productsCall;
  // }

  // getProducts(): BehaviorSubject<Product[]> {
  //   const productsCall = new BehaviorSubject(products);
  //   return productsCall;
  // }

  filterProducts(id: number) {
    const toFilter = products.filter(elem => elem.category.id === id);
    this.source.next(toFilter)
  }

  // filterProducts(id: number | undefined, productsLocal: Observable<Product> ): Observable<Product> {
  //   const productsCall = 
  //   return (id !== undefined)
  //     ? productsLocal.pipe(
  //     filter(elem => elem.id === id)
  //     )
  //     : productsLocal
  // }
}
