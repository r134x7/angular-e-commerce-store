import { Injectable } from '@angular/core';
import { products } from './mock-product';
import { Product } from './models';
import { Observable, from, of, map, filter, BehaviorSubject, tap } from "rxjs";

// provided in the root level of the app
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products service separates the implementation of retrieving the data from the component that uses it in the view
  private source = new BehaviorSubject<Product[]>(products);
  currentValue = this.source.asObservable();

  // to act as a continous source of the original when filtering
  private obsSource = of(products);
  
  constructor() { }

  filterProducts(id: number) {

    this.obsSource.pipe(map(elem => elem.filter(value => value.category.id === id))).subscribe(elem => this.source.next(elem))
    // const toFilter = products.filter(elem => elem.category.id === id);
    // this.source.next(toFilter)
    // this.source.next(this.source.getValue().filter(elem => elem.id === id))
    // this.obsSource.pipe(filter((elem, index) => elem[index].category.id === id)).subscribe(elem => this.source.next(elem))
    //.subscribe(elem => this.source.next([elem]))
    //.pipe(map(elem => elem.filter(value => value.id === id))).subscribe(elem => this.source.next(elem))
    // this.source.next()
    // console.log(this.source.getValue());
    
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
