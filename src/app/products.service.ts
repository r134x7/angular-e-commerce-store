import { Injectable } from '@angular/core';
import { products } from './mock-product';
import { Product } from './models';
import { Observable, from, of, map, filter, BehaviorSubject, tap } from "rxjs";
import { CartService } from './cart.service';

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
  private productSource = from(products);
  
  constructor(private cartService: CartService) { }

  filterProducts(id: number) {
    this.obsSource.pipe(map(elem => elem.filter(value => value.category.id === id))).subscribe(elem => this.source.next(elem))
  }

  getProduct(id: number): Observable<Product> {
    return this.productSource.pipe(filter(elem => elem.id === id))
  }

  // this might be a better way of using services through other services so many components call from the same thing. 
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
