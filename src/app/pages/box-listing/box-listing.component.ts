import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ApolloService} from "../../data-access/services/box.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-box-details',
  templateUrl: './box-listing.component.html',
  styleUrls: ['./box-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListingComponent implements OnInit, OnDestroy {


  constructor(public apolloService: ApolloService,
             ) {
    /*this.getBoxesGQL.fetch(undefined, {
         fetchPolicy: 'no-cache',

       }).subscribe(result => {
      console.log(result);
    });*/

    /*this.apolloService.getAllBoxes().pipe(tap((result) => {
      console.log(result);
    }))*/
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    var canvas: any = document.getElementById("chartBig");
    var ctx = canvas.getContext("2d");
    var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }
}
