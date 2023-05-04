import { Injectable } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop"
import { BehaviorSubject } from "rxjs";
import { Cart } from "./models";
import { Product } from './models';
import type { Signal } from '@angular/core';

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

  testTotal = toSignal(this.source, {requireSync: true})

  constructor() {}
  
  addToCart(product: Product): void {
    
    const indexCheck = (this.source.getValue().length === 0)
      ? -1 
      : this.source.getValue().findIndex(elem => elem.products.id === product.id) 
    
    const updateValues = (indexCheck === -1)
      ? [ ...this.source.getValue(), { products: product, purchaseQuantity: 1} as Cart]  // ensures key names for object are affected by LSP
      : this.source.getValue().map((elem, index) => {
        return (index === indexCheck)
          ? { products: elem.products, purchaseQuantity: elem.purchaseQuantity + 1 } as Cart // ensures key names are affected by LSP
          : elem
      })

    this.source.next(updateValues)
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

  calculateTotal(): number {
    const total = Number(this.source.getValue().reduce((acc, next) => {
      if (this.source.getValue().length !== 0) {
        return acc + (next.products.price * next.purchaseQuantity)
      } else {
        return acc
      }
    }, 0).toFixed(2));

    // const total = Number(this.testTotal().reduce((acc, next) => {
    //   if (this.testTotal().length !== 0) {
    //     return acc + (next.products.price * next.purchaseQuantity)
    //   } else {
    //     return acc
    //   }
    // }, 0).toFixed(2));

    return total
  }

}
