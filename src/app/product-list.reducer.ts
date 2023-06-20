import { State, createReducer, on } from "@ngrx/store";
import type { Product } from "./models";
import { update } from "./product-list.actions";

// export const initialState: State<Product[]> = {
//     products: [] as Product[],
// }

export const initialState = {
    products: []
}

export const productsReducer = createReducer(
    initialState,
    on(update, (state) => state),
);