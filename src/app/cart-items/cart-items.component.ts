import { Component } from '@angular/core';
import { Cart, Product } from '../models';
import { CartService } from '../cart.service';
import type { Signal } from "@angular/core";

@Component({
  selector: 'app-cart-items',
  template: `
      <div *ngIf="cart().length !== 0; else elseBlock" class="flex-row">
       <div *ngFor="let item of cart(); trackBy: itemsTrack" class="flex-row cart">
        <div>
            <img
              src="../../assets/{{item.products.image}}"
              alt="{{item.products.name}}"
            />
          </div>
          <div>
            <div>{{item.products.name}}, {{"$"}}{{item.products.price}}</div>
            <div>
              <button (click)="subtractFromCartClick(item.products)">-</button>
              <span>Qty: {{item.purchaseQuantity}}</span>
              <button (click)="addToCartClick(item.products)">+</button>
              <span
                role="img"
                aria-label="trash"
                (click)="removeFromCartClick(item.products)"
              >
                🗑️
              </span>
            </div>
          </div>
        </div>
      </div>

        <ng-template class="cart" #elseBlock>
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
        </ng-template>
  `,
  styles: [
    `
    .cart img {
      width: 70px;
      margin-right: 1rem;
    }
  `
  ],
  providers: []
})
export class CartItemsComponent {

  cart: Signal<Cart[]> = this.cartService.cartItems;

  constructor(public cartService: CartService) {}

  addToCartClick(product: Product): void {
    this.cartService.addToCart(product);
  }

  subtractFromCartClick(product: Product): void {
    this.cartService.decrementItemFromCart(product);
  }

  removeFromCartClick(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  itemsTrack(index: number, item: Cart) {
    return item.products.id;
  }

}
