import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import type { Product } from '../models';
import { FeatureState } from '../product-list.reducer';
import { addToCart, cartSum, removeFromCart } from '../product-list.actions';
import { indexCheck } from '../product-list.reducer';

@Component({
  selector: 'app-ngrx-detail',
  template: `
    <app-ngrx-home-layout></app-ngrx-home-layout>

    <div class="container my-1">
          <button type="button" (click)="goBack()">← Back to Products</button>

          <div *ngIf="product$ | async as product; else elseBlock">
          <h2>{{product.name}}</h2>

          <p>{{product.description}}</p>

          <p>
            <strong>Price:</strong>{{product.price}}
            <button (click)="addToCart(product)">Add to Cart</button>
            <button 
              [disabled]="disabledButton((disable$ | async) ?? -1)"
              (click)="removeFromCart(product)"
            >
              Remove from Cart
            </button>
          </p>

          <img
                alt="{{product.name}}"
                src="../../assets/{{product.image}}"
          />
        </div>
          <ng-template #elseBlock>
          <img 
            alt="loading"
            src="../../assets/spinner.gif"
          />
        </ng-template>
        </div>


    <app-ngrx-cart />
  `,
  styles: [
  ]
})
export class NgrxDetailComponent implements OnInit {

  product$: Observable<Product>
  disable$: Observable<number>

  constructor(
    private store: Store<{ product: FeatureState }>,
    private route: ActivatedRoute,
    private location: Location,
    ) {
    this.product$ = this.store.select("product").pipe(select(state => {
      let get = state.products.filter(elem => elem.id === this.getProduct())

      return get[0]
    }))
    this.disable$ = this.store.select("product").pipe(select(state => {
      let get = state.products.filter(elem => elem.id === this.getProduct())

      return indexCheck(get[0], state.cart)
    } ))
  }

  ngOnInit(): void {
      this.getProduct();
  }

  getProduct(): number {
    return Number(this.route.snapshot.paramMap.get("id")); 
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ payload: product }))
    this.store.dispatch(cartSum())
  }

  removeFromCart(product: Product): void {
    this.store.dispatch(removeFromCart({ payload: product }))
    this.store.dispatch(cartSum())
  }

  goBack(): void {
    this.location.back();
  }

  disabledButton(value: number): boolean {
    return (value === -1)
      ? true
      : false
  }
} 
