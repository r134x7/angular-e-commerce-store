import { createSelector } from "@ngrx/store";
import { FeatureState } from "./product-list.reducer";

export const selectFeature = (state: FeatureState) => state;
export const productSelector = createSelector(
    selectFeature,
    (state) => state.products
)