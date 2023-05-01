import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Cart } from "./models";
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /*
  will need behaviour subject to store cart items here
  because add to cart and remove from cart buttons occur outside the cart component
  
  */ 

  private source = new BehaviorSubject<Cart[]>([]);
  currentValue = this.source.asObservable();

  constructor() {}
  
  addToCart(product: Product): void {
    // requiring a method that calls addToCart at product page description or home page
    // this.currentValue.subscribe(elem => this.source.next([{products: product, purchaseQuantity: 1}]))
    this.source.next([{products: product, purchaseQuantity: 1}])
    console.log(this.source);
    
  }

  removeFromCart(product: Product): void {
    // method to remove an item from product description page or cart menu
  }

  incrementQuantityUp(): void {
    // in cart there is a number input that increases quantity of the product you have added to cart...
  }

  decrementQuantityDown(): void {
    // may decide to add buttons to increment and decrement instead of doing it from the number input
  }
}
