import { Injectable } from '@angular/core';
import { map, exhaustMap, catchError} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ProductsService } from './products.service';

// may have to create a method in products.service to get all products

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

    constructor(
        private actions$: Actions,
        private productListService: ProductsService
    ) {}
}