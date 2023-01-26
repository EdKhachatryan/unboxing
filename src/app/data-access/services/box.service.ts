import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {gql, Mutation, Query} from 'apollo-angular';
import {Observable, of, switchMap, tap} from "rxjs";
import {DocumentNode} from "graphql/language/ast";
import {GetBoxesGQL} from "../gql/queries";
import {Box} from "../models/boxes.interface";


const Get_Boxes = gql`
query {
  boxes(free: false, purchasable: true, openable: true) {
    edges {
      node {
        id
        name
        iconUrl
        cost
      }
    }
  }
}
`

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  constructor(private apollo: Apollo,
  private getBoxes: GetBoxesGQL) {
  }

  getAllBoxes(): Observable<any>{
     return this.getBoxes.fetch()
  }

}


