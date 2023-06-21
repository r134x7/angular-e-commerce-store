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
    decrementItemFromCart,
    cartSum,
} from "./product-list.actions";

export interface FeatureState {
    products: Product[]
    categories: Category[],
    currentCategory: number | undefined,
    cartOpen: boolean,
    cart: Cart[],
    cartSum: number,
}

export const initialState: FeatureState = {
    products: [], 
    categories: [],
    currentCategory: undefined, 
    cartOpen: false,
    cart: [],
    cartSum: 0,
}

// helper function
export function indexCheck(product: Product, cart: Cart[]): number {
    return (cart.length === 0)
      ? -1 
      : cart.findIndex(elem => elem.products.id === product.id) 
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

        const callIndexCheck = indexCheck( action.payload, state.cart) 

        const updateValues = (callIndexCheck === -1)
            ? [...state.cart, {
                products: action.payload,
                purchaseQuantity: 1
            } as Cart]
            : state.cart.map((elem, index) => {
                return (index === callIndexCheck)
                    ? {
                        products: elem.products,
                        purchaseQuantity: elem.purchaseQuantity + 1
                    } as Cart
                    : elem
            })
        
        console.log(updateValues);
        

        return {
            ...state,
            cartOpen: true,
            // cart: [...state.cart, { products: action.payload, purchaseQuantity: 1}],
            cart: updateValues
        }
    }),
    on(decrementItemFromCart, (state, action) => {

        // let indexCheck = state.cart.findIndex(elem => elem.products.id === action.payload.id)

        const callIndexCheck = indexCheck(action.payload, state.cart) 

        const updateValue = (state.cart[callIndexCheck].purchaseQuantity === 1)
            ? state.cart.filter((elem, index) => index !== callIndexCheck)
            : state.cart.map((elem, index) => {
                return (index === callIndexCheck)
                    ? {
                        products: elem.products,
                        purchaseQuantity: elem.purchaseQuantity -1
                    } as Cart
                    : elem
            })

        return {
            ...state,
            cartOpen: true,
            cart: updateValue
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
    }),
    on(cartSum, (state, action) => {
        return {
            ...state,
            cartSum: Number(state.cart.reduce((acc, next) => {
                return (state.cart.length !== 0)
                    ? acc + (next.products.price * next.purchaseQuantity)
                    : acc
            }, 0).toFixed(2))
        }
    })

);