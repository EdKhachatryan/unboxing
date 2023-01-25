import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BoxListingComponent} from "./pages/box-listing/box-listing.component";
import {BoxDetailsComponent} from "./pages/box-details/box-details.component";

const routes: Routes = [
  {
    path: '',
    component: BoxListingComponent,
    data: {
      meta: {
        title: 'Box Details',
      },
      wrapper: true,
    },
  },
  {
    path: ':id',
    component: BoxDetailsComponent,
    data: {
      meta: {
        title: 'Box Details',
      },
      wrapper: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
