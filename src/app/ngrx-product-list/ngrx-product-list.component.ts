import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { Store } from '@ngrx/store';
import { update } from '../product-list.actions';
import { ProductsService } from '../products.service';
import type { Category } from '../models';

@Component({
  selector: 'app-ngrx-product-list',
  template: `
      <div class="my-2">
      <h2>Our Products:</h2>

        <div *ngIf="(products$ | async)?.length !== 0; else elseBlock" class="flex-row">
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

  products$: Observable<Product[]> = this.store.select(state => {
    console.log(state);
    return state.products
  });

  constructor(private store: Store<{ products: Product[] }>) {
    // this.products$ = store.select('products');
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Product-List Component] Get All' });
    // this.store.dispatch(update({
    //   payload: [{
    //   id: 1,
    //   name: 'Tin of Cookies',
    //   description:
    //     'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    //   image: 'cookie-tin.jpg',
    //   category: { id: 0, name: "test"},
    //   price: 2.99,
    //   quantity: 500
    // }]
    // }));
  }
}
