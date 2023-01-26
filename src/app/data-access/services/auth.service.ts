import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {query} from "@angular/animations";
// import {Current_User} from "../gql/queries";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {
  }

  getCurrentUser() {
    // this.apollo.watchQuery({query: Current_User})
  }
}
