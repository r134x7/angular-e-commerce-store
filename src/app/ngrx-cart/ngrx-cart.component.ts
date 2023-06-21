import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureState } from '../product-list.reducer';
import { Store, select } from '@ngrx/store';
import { toggleCart } from '../product-list.actions';

@Component({
  selector: 'app-ngrx-cart',
  template: `
    <div class="cart" *ngIf="(cartOpen$ | async) === true else elseBlock">
      <div class="close" (click)="toggleCartDispatch()">
        [close]
    </div>
      <h2>Shopping Cart</h2>

      <app-ngrx-cart-items></app-ngrx-cart-items>

          <div class="flex-row space-between">
            <strong *ngIf="cartSum$ | async as cartSum">Total: {{"$"}}{{cartSum}}</strong>
          </div>
  </div> 

      <ng-template #elseBlock>
        <div class="cart-closed" (click)="toggleCartDispatch()">
          <span role="img" aria-label="trash">
            🛒
          </span>
        </div>
      </ng-template>
  `,
  styles: [
    `
    .cart {
      position: fixed;
      top: 0;
      right: 0;
      min-width: 20%;
      max-width: 30%;
      max-height: 60%;
      background-color: var(--light);
      overflow: auto;
      padding: .5rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
      border-bottom-left-radius: .5rem;
    }

    .cart h2 {
      font-size: 1.5rem;
      border-bottom: 1px solid var(--dark);
      padding-bottom: .5rem;
      margin: 1rem 0;
    }

    .cart .close {
      position: absolute;
      top: .5rem;
      right: .5rem;
      cursor: pointer;
      color: var(--tertiary);
    }

    .cart .close:hover {
      text-decoration: underline;
    }

    .cart-closed {
      position: fixed;
      top: 2%;
      right: 1%;
      font-size: 2rem;
      cursor: pointer;
      background-color: var(--secondary);
      border-radius: 50%;
      padding: .25rem;
      width: 50px;
      height: 50px;
    }

    .cart-closed:hover {
      transform: rotate(8deg);
    }

    .cart img {
      width: 70px;
      margin-right: 1rem;
    }

    .cart input {
      width: 50px;
      padding: 0;
      margin: 0 .5rem 1rem 0;
    }

    @media screen and (max-width: 768px) {
      .cart {
        position: relative;
        max-width: 100%;
        max-height: auto;
        box-shadow: none;
        background-color: inherit;
      }
    
      .cart-closed {
        position: relative;
        margin: 0 auto;
      }
    }
  `
  ]
})
export class NgrxCartComponent {

  cartOpen$: Observable<boolean>;
  cartSum$: Observable<number>;

  constructor(private store: Store<{ product: FeatureState }>) {
    this.cartOpen$ = this.store.select('product').pipe(select(state => state.cartOpen))
    this.cartSum$ = this.store.select('product').pipe(select(state => state.cartSum))
  }

  toggleCartDispatch(): void {
    this.store.dispatch(toggleCart());
  }
}
