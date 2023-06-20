import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models';
import { Store } from '@ngrx/store';
import { update } from '../product-list.actions';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ngrx-product-list',
  template: `
    <p>
      ngrx-product-list works!
    </p>
  `,
  styles: [
  ]
})
export class NgrxProductListComponent {

  products$: Observable<Product[]> = this.store.select(state => state.products);

  constructor(private store: Store<{ products: Product[] }>) {
    this.products$ = store.select('products');
  }

  ngOnInit() {
    this.store.dispatch({ type: '[Product-List Component] Update'});
  }
}
