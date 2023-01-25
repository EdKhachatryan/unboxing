import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ApolloService} from "../../data-access/services/box.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-box-details',
  templateUrl: './box-listing.component.html',
  styleUrls: ['./box-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListingComponent {


  constructor(public apolloService: ApolloService,
             ) {
    /*this.getBoxesGQL.fetch(undefined, {
         fetchPolicy: 'no-cache',

       }).subscribe(result => {
      console.log(result);
    });*/

    this.apolloService.getAllBoxes().pipe(tap((result) => {
      console.log(result);
    }))
  }
}
