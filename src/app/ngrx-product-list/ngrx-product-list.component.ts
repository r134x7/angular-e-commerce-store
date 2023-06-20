import { Component, OnInit } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Product } from '../models';
import { Store, select } from '@ngrx/store';
import { FeatureState } from '../product-list.reducer';

@Component({
  selector: 'app-ngrx-product-list',
  template: `
      <div class="my-2">
      <h2>Our Products:</h2>

        <div *ngIf="products$ | async; else elseBlock" class="flex-row">
          <div *ngFor="let product of products$ | async" class="card px-1 py-1"> 
          <a 
            routerLink="/products/{{product.id}}" 
            >
              <img
                alt="{{product.name}}"
                src="../../assets/{{product.image}}"
              />
              <p>{{product.name}}</p>
            </a>
            <div>
              <div>{{product.quantity}} items in stock</div>
              <span>{{"$"}}{{product.price}}</span>
            </div>
          <!-- <button (click)="addToCartClick(product)">Add to cart</button> -->
          </div>
        </div>
        <ng-template #elseBlock>
          <h3>You haven't added any products yet!</h3>
          <img 
            alt="loading"
            src="../../assets/spinner.gif"
          />
        </ng-template>
      </div>
  `,
  styles: [
  ]
})
export class NgrxProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  
  // The store's type is an object that must use the key name used in StoreModule.forRoot
  constructor(private store: Store<{ product: FeatureState }>) {
    this.products$ = this.store.select('product').pipe(select(state => state.products))
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Product-List Component] Get All' });
  }
}
