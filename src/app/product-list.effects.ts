import { Injectable } from '@angular/core';
import { map, exhaustMap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductsService } from './products.service';
import { CategoriesService } from './categories.service';

@Injectable()
export class ProductListEffects {

    loadProducts$ = createEffect(() => 
    this.actions$.pipe(
        ofType('[Product-List Component] Get All'),
        exhaustMap(() => this.productListService.getAllProducts().pipe(
            map(products => ({
                type: '[Product-List Component] Update',
                payload: products 
            })),
            catchError(() => EMPTY)
        ))
    ))

    loadCategories$ = createEffect(() => 
    this.actions$.pipe(
        ofType('[Product-List Component] Get Categories'),
        exhaustMap(() => this.categoriesService.getCategories().pipe(
            map(elem => ({
                type: '[Product-List Component] Update Categories',
                payload: elem,
            })),
            catchError(() => EMPTY)
        ))
    )
    )

    constructor(
        private actions$: Actions,
        private productListService: ProductsService,
        private categoriesService: CategoriesService,
    ) {}
}