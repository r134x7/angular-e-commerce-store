import { createAction, props } from "@ngrx/store";
import { Product } from "./models";

export const update = createAction('[Product-List Component] Update', props<{ payload: Product[] }>);