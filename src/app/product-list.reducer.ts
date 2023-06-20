import { createReducer, on } from "@ngrx/store";
import type { Product, Category } from "./models";
import { 
    categoryMenuList, 
    updateProductList, 
    increment,
    categoryFilter, 
} from "./product-list.actions";

export interface FeatureState {
    products: Product[]
    categories: Category[],
    currentCategory: number | undefined,
}

export const initialState: FeatureState = {
    products: [], 
    categories: [],
    currentCategory: undefined, 
}

export const productsReducer = createReducer(
    initialState,
    on(updateProductList, (state, action) => {
        return {
            ...state,
            products: [...action.payload]
        }
    }),
    on(categoryMenuList, (state, action) => {
        return {
            ...state,
            categories: [...action.payload]
        }
    }),
    on(categoryFilter, (state, action) => {
        return {
            ...state,
            currentCategory: action.payload,
            products: state.products
                .filter(elem => elem.category.id === action.payload)
        }
    })
    // on(increment, (state, action) => {
    //     console.log(state.counter);
        
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }),
);