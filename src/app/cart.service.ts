import { Injectable } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop"
import { BehaviorSubject } from "rxjs";
import { Cart } from "./models";
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private source = new BehaviorSubject<Cart[]>([]);
  currentValue = this.source.asObservable();
  cartItems = toSignal(this.source, {requireSync: true})

  constructor() {}

  indexCheck(product: Product): number {
    return (this.source.getValue().length === 0)
      ? -1 
      : this.source.getValue().findIndex(elem => elem.products.id === product.id) 
  }
  
  addToCart(product: Product): void {
    
    const indexCheck = this.indexCheck(product);
    
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
    const indexCheck = this.indexCheck(product);

    const updateValue = (this.source.getValue()[indexCheck].purchaseQuantity === 1)
      ? this.source.getValue().filter((elem, index) => index !== indexCheck)
      : this.source.getValue().map((elem, index) => {
        return (index === indexCheck)
          ? { products: elem.products, purchaseQuantity: elem.purchaseQuantity - 1 } as Cart // ensures key names are affected by LSP
          : elem
      })

      this.source.next(updateValue)
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

    return total
  }

}
