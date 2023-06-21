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

export const addToCart = createAction(
    '[Product-List Component] Add To Cart',
    props<{ payload: Product }>()
)

export const decrementItemFromCart = createAction(
    '[Product-List Component] Update Cart Quantity',
    props<{ payload: Product }>()
)

export const removeFromCart = createAction(
    '[Product-List Component] Remove From Cart',
    props<{ payload: Product }>()
)

export const clearCart = createAction(
    '[Product-List Component] Clear Cart',
)

export const cartSum = createAction(
    '[Product-List Component] Cart Sum'
)