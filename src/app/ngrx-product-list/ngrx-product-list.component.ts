import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { Store } from '@ngrx/store';
import { update } from '../product-list.actions';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ngrx-product-list',
  template: `
      <div class="my-2">
      <h2>Our Products:</h2>

        <div *ngIf="products$; else elseBlock" class="flex-row">
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
export class NgrxProductListComponent {

  products$: Observable<Product[]> = this.store.select(state => state.products);

  constructor(private store: Store<{ products: Product[] }>) {
    // this.products$ = store.select('products');
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Product-List Component] Update'});
  }
}
