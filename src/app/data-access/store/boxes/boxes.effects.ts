import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";
import {loadBoxes, loadBoxesFailure, loadBoxesSuccess} from "./boxes.actions";
import {catchError, exhaustMap, from, map, of, switchMap} from "rxjs";
import {BoxesService} from "../../services/box.service";

@Injectable()
export class BoxesEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private boxService: BoxesService
  ) {
  }

  // Run this code when a loadTodos action is dispatched
  loadBoxes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBoxes),
      exhaustMap(() =>
        from(this.boxService.getAllBoxes()).pipe(
          map((boxes) => {
            return loadBoxesSuccess({boxes: boxes.data.boxes.edges})
          }),
          catchError((error) => of(loadBoxesFailure({ error })))
        )
      )
    )
  );
}
