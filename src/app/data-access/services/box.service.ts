import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {gql, Mutation, Query} from 'apollo-angular';
import {Observable} from "rxjs";

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
export class ApolloService {
  constructor(private apollo: Apollo) {
  }
 // todo change function structure
  getAllBoxes(): Observable<any> {
    console.log("-----------")
    this.apollo
      .query<any>({
        query: Get_Boxes,
        // fetchPolicy: 'network-only',
      }).subscribe(response => {
      console.log(response)
      // subscriber.next(response);
    });
    return new Observable<any>(subscriber => {
      try {
        console.log("asdasdasd")
        this.apollo
          .query<any>({
            query: Get_Boxes,
            // fetchPolicy: 'network-only',
          })
          .subscribe(response => {
            console.log(response)
            subscriber.next(response);
          });
      } catch (err: any) {
        console.log("!!!!!!!!!!!")
        subscriber.error(err);
      }
    });
  }

}
