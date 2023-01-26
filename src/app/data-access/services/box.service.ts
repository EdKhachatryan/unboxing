import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {Observable} from "rxjs";
import {Get_Boxes} from "../gql/queries";



@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private apollo: Apollo) {
  }
 // todo change function structure
  getAllBoxes(){
    console.log("-----------")
   /* this.apollo
      .query<any>({
        query: Get_Boxes,
        // fetchPolicy: 'network-only',
      }).subscribe(response => {
      console.log(response.data.boxes.edges)
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
    });*/
  }

}
