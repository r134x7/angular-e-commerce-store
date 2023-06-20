import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { Observable } from 'rxjs';
import { FeatureState } from '../product-list.reducer';
import { Store, select } from '@ngrx/store';

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

  categories$: Observable<Category[]>;

  constructor(private store: Store<{ product: FeatureState }>) {
    this.categories$ = this.store.select('product').pipe(select(state => state.categories));
  }

  ngOnInit(): void {
      this.store.dispatch({ type: '[Product-List Component] Get Categories'})
  }

}
