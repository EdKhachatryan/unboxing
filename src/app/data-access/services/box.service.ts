import {Injectable} from "@angular/core";
import {Observable, } from "rxjs";
import {GetBoxesGQL} from "../gql/queries";


@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  constructor(
  private getBoxes: GetBoxesGQL) {
  }

  getAllBoxes(): Observable<any>{
     return this.getBoxes.fetch()
  }

}


