import { createReducer, on } from "@ngrx/store";
import type { Product, Category } from "./models";
import { cartProductList, updateProductList, increment } from "./product-list.actions";

export interface FeatureState {
    products: Product[]
    categories: Category[],
    currentCategory: string,
    counter: number,
}

export const initialState: FeatureState = {
    products: [], 
    categories: [],
    currentCategory: "",
    counter: 0,
}

export const productsReducer = createReducer(
    initialState,
    on(updateProductList, (state, action) => {
        console.log(state.products);
        
        console.log(action.payload);
        
        return {
            ...state,
            products: [...action.payload]
        }
    }),
    on(cartProductList, (state, action) => {
        console.log(state);
        console.log(state.categories);
        console.log(action.payload);
        
        return {
            ...state,
            categories: [...action.payload]
        }
    }),
    on(increment, (state, action) => {
        console.log(state.counter);
        
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
);