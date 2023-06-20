import { createReducer, on } from "@ngrx/store";
import type { Product, Category, Cart } from "./models";
import { 
    categoryMenuList, 
    updateProductList, 
    categoryFilter, 
    toggleCart,
    addToCart,
    clearCart,
    removeFromCart,
    updateCartQuantity,
} from "./product-list.actions";

export interface FeatureState {
    products: Product[]
    categories: Category[],
    currentCategory: number | undefined,
    cartOpen: boolean,
    cart: Cart[],
}

export const initialState: FeatureState = {
    products: [], 
    categories: [],
    currentCategory: undefined, 
    cartOpen: false,
    cart: [],
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
    }),
    on(toggleCart, (state, action) => {
        return {
            ...state,
            cartOpen: !state.cartOpen
        }
    }),
    on(addToCart, (state, action) => {
        return {
            ...state,
            cartOpen: true,
            cart: [...state.cart, { products: action.payload, purchaseQuantity: 1}],
        }
    }),
    on(updateCartQuantity, (state, action) => {
        return {
            ...state,
            cartOpen: true,
            cart: state.cart.map((elem) => {
                return (action.payload.id === elem.products.id)
                    ? {
                        ...elem,
                        purchaseQuantity: elem.purchaseQuantity + 1 
                    }
                    : elem
            })
        }
    }),
    on(removeFromCart, (state, action) => {
        let newState = state.cart.filter(elem => elem.products.id !== action.payload.id)
        return {
            ...state,
            cartOpen: newState.length > 0,
            cart: newState
        }
    }),
    on(clearCart, (state, action) => {
        return {
            ...state,
            cartOpen: false,
            cart: [],
        }
    })

);