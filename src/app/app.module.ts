import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BoxListingComponent} from "./pages/box-listing/box-listing.component";
import {BoxDetailsComponent} from "./pages/box-details/box-details.component";

@NgModule({
  declarations: [
    AppComponent,
    BoxListingComponent,
    BoxDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
