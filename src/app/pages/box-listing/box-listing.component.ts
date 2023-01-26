import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {AuthService} from "../../data-access/services/auth.service";
import {BoxesService, } from "../../data-access/services/box.service";
import {Store} from "@ngrx/store";
import {selectAllBoxes} from "../../data-access/store/boxes/boxes.selectors";
import {loadBoxes} from "../../data-access/store/boxes/boxes.actions";

@Component({
  selector: 'app-box-details',
  templateUrl: './box-listing.component.html',
  styleUrls: ['./box-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListingComponent implements OnInit, OnDestroy {
  public allBoxes$ = this.store.select(selectAllBoxes);

  constructor(private store: Store
             ) {
    this.store.dispatch(loadBoxes());
  }

  ngOnInit() {

    // var body = document.getElementsByTagName("body")[0];
    // body.classList.add("landing-page");

    // var canvas: any = document.getElementById("chartBig");
    // var ctx = canvas.getContext("2d");
    // var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    // gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    // gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
  }

  ngOnDestroy() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.remove("landing-page");
  }
}
