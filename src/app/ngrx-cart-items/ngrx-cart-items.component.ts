import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart, Product } from '../models';
import { FeatureState } from '../product-list.reducer';
import { Store, select } from '@ngrx/store';
import { addToCart, removeFromCart, decrementItemFromCart } from '../product-list.actions';

@Component({
  selector: 'app-ngrx-cart-items',
  template: `
      <div *ngIf="cart$ | async; else elseBlock" class="flex-row">
       <div *ngFor="let item of cart$ | async" class="flex-row cart">
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
  ]
})
export class NgrxCartItemsComponent {

  cart$: Observable<Cart[]>;

  constructor(private store: Store<{ product: FeatureState}>) {
    this.cart$ = this.store.select('product').pipe(select(state => state.cart))
  }

  addToCartClick(product: Product): void {
    this.store.dispatch(addToCart({ payload: product }))
  }

  subtractFromCartClick(product: Product): void {
    this.store.dispatch(decrementItemFromCart({ payload: product }))
  }

  removeFromCartClick(product: Product): void {
    this.store.dispatch(removeFromCart({ payload: product }))
  }
 
}
