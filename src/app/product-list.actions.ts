import { createAction, props } from "@ngrx/store";
import { Category, Product } from "./models";

export const updateProductList = createAction('[Product-List Component] Update', props<{ payload: Product[] }>());

export const categoryMenuList = createAction(
    '[Product-List Component] Update Categories',
    props<{ payload: Category[]}>()); 

export const categoryFilter = createAction(
    '[Product-List Component] Filter Category',
    props<{ payload: number }>());

export const toggleCart = createAction(
    '[Product-List Component] Toggle Cart',
);

export const increment = createAction(
    '[Counter Component] Increment'
);