import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {environment} from "../../../environments/envitonment";
import {HttpHeaders} from "@angular/common/http";


export function createApollo(httpLink: HttpLink): any {
  return {
    link: httpLink.create({
      uri: environment.apiEndpoint,
      headers: new HttpHeaders({
        withCredentials: `true`,
      })
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
}
