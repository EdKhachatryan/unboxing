import {gql, Query} from "apollo-angular";
import {Injectable} from "@angular/core";
/*

export const Current_User = gql`
query {
   currentUser {
     id
     name
     wallets {
       id
       amount
       currency
     }
    }
  }
}
`

export const Get_Boxes = gql`
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

export const Open_Box = gql`
mutation OpenBox($input: OpenBoxInput!) {
 openBox(input: $input) {
   boxOpenings {
     id
     itemVariant {
       id
       name
       value
     }
    }
  }
}
`

export const Subscribe_Wallet = gql`
subscription OnUpdateWallet {
  updateWallet {
    wallet {
      id
      amount
      name
      }
    }
  }
`

*/

@Injectable({
  providedIn: 'root',
})
export class GetBoxesGQL extends Query<any> {
  // @ts-ignore
  document = gql`
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
}`;
}
