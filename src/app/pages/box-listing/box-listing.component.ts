import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {AuthService} from "../../data-access/services/auth.service";
import {BoxesService, } from "../../data-access/services/box.service";
import {Store} from "@ngrx/store";
import {selectAllBoxes} from "../../data-access/store/boxes/boxes.selectors";
import {loadBoxes} from "../../data-access/store/boxes/boxes.actions";
import {BoxesState} from "../../data-access/models/boxes.interface";

@Component({
  selector: 'app-box-details',
  templateUrl: './box-listing.component.html',
  styleUrls: ['./box-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListingComponent implements OnInit, OnDestroy {
  public allTodos$ = this.store.select(selectAllBoxes);

  constructor(private store: Store<BoxesState>
             ) {
    this.store.dispatch(loadBoxes());
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
