import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { Observable } from 'rxjs';
import { FeatureState } from '../product-list.reducer';
import { Store, select } from '@ngrx/store';
import * as CategoryActions from "../product-list.actions"

@Component({
  selector: 'app-ngrx-category-menu',
  template: `
    <div>
      <h2>Choose a Category:</h2>
        <button
          *ngFor="let category of categories$ | async;"
        >
        {{category.name}}
        </button>
    </div>
  `,
  styles: [
  ]
})
export class NgrxCategoryMenuComponent implements OnInit {

  categories$: Observable<Category[]> = this.store.pipe(select(state => state.categories));

  constructor(private store: Store<FeatureState>) {
    // this.categories$ = store.select('categories')
    // this.categories$ = this.store.pipe(select(state => state.categories))
  }

  ngOnInit(): void {
      this.store.dispatch({ type: '[Product-List Component] Get Categories'})
      // this.store.dispatch(CategoryActions.cartProductList())
  }
}
