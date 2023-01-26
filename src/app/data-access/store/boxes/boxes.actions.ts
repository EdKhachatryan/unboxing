import {createAction, props} from "@ngrx/store";
import {Box} from "../../models/boxes.interface";

export const loadBoxes = createAction('[Listing Page] Load Boxes');

export const loadBoxesSuccess = createAction(
  '[Todo API] Todo Load Success',
  props<{ boxes: Box[] }>()
);

export const loadBoxesFailure = createAction(
  '[Todo API] Todo Load Failure',
  props<{ error: string }>()
);
