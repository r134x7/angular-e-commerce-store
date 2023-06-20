import { Component, OnInit } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Product } from '../models';
import { Store, select } from '@ngrx/store';
import { updateProductList } from '../product-list.actions';
import { ProductsService } from '../products.service';
import type { Category } from '../models';
import { FeatureState } from '../product-list.reducer';
import { productSelector } from '../selector';

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

  // products$: Observable<Product[]> = this.store.select(state => {
  //   console.log(state);
  //   return state.products
  // });
  // products$: Observable<Product[]> = this.store.select(state => state.products)
  products$: Observable<Product[]>;
  
  constructor(private store: Store<FeatureState>) {
    this.products$ = store.select('products');
    // this.products$ = this.store.pipe(select(productSelector))
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Product-List Component] Get All' });
  }
}
