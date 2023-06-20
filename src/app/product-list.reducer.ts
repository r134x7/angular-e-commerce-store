import { createReducer, on } from "@ngrx/store";
import type { Product } from "./models";
import { update } from "./product-list.actions";

export const initialState = {
    products: [] as Product[],
}

export const productsReducer = createReducer(
    initialState,
    on(update, (state, action) => {
        return {
            ...state,
            products: [...action._p.payload]
        }
    }),
);