import {createSelector} from '@ngrx/store';
import {AppState} from '../app.state';
import {BoxesState} from "../../models/boxes.interface";

export const selectBoxes = (state: AppState) => state.boxState;
export const selectAllBoxes = createSelector(
  selectBoxes,
  (state: BoxesState) => state.boxes
);
