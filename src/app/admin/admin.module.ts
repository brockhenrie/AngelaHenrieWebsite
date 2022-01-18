import { ProductsModule } from './../products/products.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './AdminRouting.module';

import { EventTableComponent } from './event-table/event-table.component';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    EventTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ProductsModule
  ],
  exports: [
    AdminComponent,
    DashboardComponent
  ]
})
export class AdminModule { }
