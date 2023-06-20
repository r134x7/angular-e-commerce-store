import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { Observable } from 'rxjs';
import { FeatureState } from '../product-list.reducer';
import { Store, select } from '@ngrx/store';
import { categoryFilter } from '../product-list.actions';

@Component({
  selector: 'app-ngrx-category-menu',
  template: `
    <div>
      <h2>Choose a Category:</h2>
        <button
          *ngFor="let category of categories$ | async;"
          (click)="filterProductsByCategory(category.id)"
        >
        {{category.name}}
        </button>
    </div>
  `,
  styles: [
  ]
})
export class NgrxCategoryMenuComponent implements OnInit {

  categories$: Observable<Category[]>;

  // The store's type is an object that must use the key name used in StoreModule.forRoot
  constructor(private store: Store<{ product: FeatureState }>) {
    this.categories$ = this.store.select('product').pipe(select(state => state.categories));
  }

  ngOnInit(): void {
      this.store.dispatch({ type: '[Product-List Component] Get Categories'})
  }

  filterProductsByCategory(categoryId: number): void {
    this.store.dispatch(categoryFilter({ payload: categoryId }))
  }

}
