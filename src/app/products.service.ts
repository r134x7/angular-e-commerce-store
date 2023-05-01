import { Injectable } from '@angular/core';
import { products } from './mock-product';
import { Product } from './models';
import { Observable, of, filter, BehaviorSubject, tap } from "rxjs";

// provided in the root level of the app
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products service separates the implementation of retrieving the data from the component that uses it in the view
  private source = new BehaviorSubject<Product[]>(products);
  currentValue = this.source.asObservable();
  
  constructor() { }

  filterProducts(id: number) {
    const toFilter = products.filter(elem => elem.category.id === id);
    this.source.next(toFilter)
    // this.currentValue.pipe(
    //   filter((elem, index) => {
    //   tap(elem => console.log(elem))
    //   return elem[index].id === id})).subscribe(elem => {
    //     tap(elem => console.log(elem))
    //     return this.source.next(elem)
    //   }) 
    // this.source.next(toFilter)
  }

}
