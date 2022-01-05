import { AdminComponent } from './admin.component';

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductControlComponent } from './product-control/product-control.component';
import { EventTableComponent } from './event-table/event-table.component';

const routes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'products',
        component: ProductControlComponent, //change to correct component when created
      },
      {
        path: 'events',
        component: EventTableComponent,
      },
      {
        path: 'users',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
