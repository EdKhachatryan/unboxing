import {createAction, props} from "@ngrx/store";
import {Box} from "../../models/boxes.interface";

export const loadBoxes = createAction('[Listing Page] Load Boxes');

export const loadBoxesSuccess = createAction(
  '[Boxes API] boxes Load Success',
  props<{ boxes: any }>()
);

export const loadBoxesFailure = createAction(
  '[Boxes API] boxes Load Failure',
  props<{ error: string }>()
);
