import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {AuthService} from "../../data-access/services/auth.service";
import {BoxesService, } from "../../data-access/services/box.service";
import {Store} from "@ngrx/store";
import {selectAllBoxes} from "../../data-access/store/boxes/boxes.selectors";
import {loadBoxes} from "../../data-access/store/boxes/boxes.actions";
import {AppState} from "../../data-access/store/app.state";

@Component({
  selector: 'app-box-details',
  templateUrl: './box-listing.component.html',
  styleUrls: ['./box-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListingComponent implements OnInit, OnDestroy {
  public allBoxes$ = this.store.select(selectAllBoxes);

  constructor(private store: Store<AppState>
             ) {
    this.store.dispatch(loadBoxes());
  }

  ngOnInit() {
    this.allBoxes$.pipe().subscribe((res) => {
      console.log(res);
    })

  }

  ngOnDestroy() {

  }
}
