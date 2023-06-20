import { createReducer, on } from "@ngrx/store";
import type { Product } from "./models";
import { update } from "./product-list.actions";

export interface FeatureState {
    products: Product[]
}

export const initialState: FeatureState = {
    products: [], 
}

export const productsReducer = createReducer(
    initialState,
    on(update, (state, action) => {
        console.log(state.products);
        
        console.log(action.payload);
        
        return {
            ...state,
            products: [...action.payload]
        }
    }),
);