import {BoxesState} from "../../models/boxes.interface";
import {createReducer, on} from "@ngrx/store";
import {loadBoxes, loadBoxesFailure, loadBoxesSuccess} from "./boxes.actions";

export const initialState: BoxesState = {
  boxes: [],
  error: '',
  status: 'pending',
};

export default function reducer(state = initialState) {}

export const boxReducer = createReducer(
  initialState,

  on(loadBoxes, (state) => ({ ...state, status: 'loading' })),

  on(loadBoxesSuccess, (state, { boxes }) => {
    return ({
      ...state,
      boxes: boxes,
      error: '',
      status: 'success',
    })
  }),

  on(loadBoxesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
  )
