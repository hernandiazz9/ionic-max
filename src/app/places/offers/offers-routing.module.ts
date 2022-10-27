import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage,
    children: [
      {
        path: 'new-offer',
        loadChildren: () =>
          import('./new-offer/new-offer.module').then(
            (m) => m.NewOfferPageModule
          ),
      },
      {
        path: 'edit-offer:placeId',
        loadChildren: () =>
          import('./edit-offer/edit-offer.module').then(
            (m) => m.EditOfferPageModule
          ),
      },
      {
        path: ':placeId',
        loadChildren: () =>
          import('./offer-bookings/offer-bookings.module').then(
            (m) => m.OfferBookingsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
