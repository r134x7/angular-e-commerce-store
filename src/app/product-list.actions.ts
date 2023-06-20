import { createAction, props } from "@ngrx/store";
import { Category, Product } from "./models";

export const updateProductList = createAction('[Product-List Component] Update', props<{ payload: Product[] }>());

export const cartProductList = createAction(
    '[Product-List Component] Update Categories',
    props<{ payload: Category[]}>()); 

export const increment = createAction(
    '[Counter Component] Increment'
);