import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-box-details',
    templateUrl: './box-details.component.html',
    styleUrls: ['./box-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxDetailsComponent {


    constructor() {

    }
}
