import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoxListingComponent} from "./pages/box-listing/box-listing.component";
import {BoxDetailsComponent} from "./pages/box-details/box-details.component";
import {GraphQLModule} from "./data-access/gql/graphql.module";
import {Apollo} from "apollo-angular";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardComponent} from "./shared/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    BoxListingComponent,
    BoxDetailsComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [Apollo],
  bootstrap: [AppComponent]
})
export class AppModule {
}
