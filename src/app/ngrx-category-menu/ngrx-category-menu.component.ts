import { Component, OnInit } from '@angular/core';
import { Category } from '../models';
import { Observable } from 'rxjs';
import { FeatureState } from '../product-list.reducer';
import { Store, select } from '@ngrx/store';
import * as CategoryActions from "../product-list.actions"
import { counterSelector } from '../selector';
import type { ActionReducer, Action } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-category-menu',
  template: `
    <div>
      <h2>Choose a Category:</h2>
      <button (click)="test()" >TEST!</button>
      <button (click)="increment()" >count! {{ count$ | async }}</button>
      <div>Count: {{ count$ | async }}</div>
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

  // categories$: Observable<Category[]> = this.store.pipe(select(state => state.categories));
  categories$: Observable<Category[]>;
  count$: Observable<number>

  constructor(private store: Store<{ product: FeatureState }>) {
    this.categories$ = store.select('product').pipe(select(state => state.categories));
    this.count$ = this.store.select('product').pipe(select(counterSelector))
    // this.categories$ = this.store.pipe(select(state => state.categories))
  }

  ngOnInit(): void {
      this.store.dispatch({ type: '[Product-List Component] Get Categories'})
      // this.store.dispatch(CategoryActions.cartProductList())
  }

  test(): void {
    // console.log(this.store)
    console.log(this.categories$);
    console.log(this.count$);
    
    
  }

  increment() {
    // this.store.dispatch({ type: '[Counter Component] Increment'})
    this.store.dispatch(CategoryActions.increment())

    console.log(this.count$)
  }

}
