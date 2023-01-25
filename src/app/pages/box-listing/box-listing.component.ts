import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-box-details',
    templateUrl: './box-listing.component.html',
    styleUrls: ['./box-listing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxListingComponent {


    constructor() {

    }
}
