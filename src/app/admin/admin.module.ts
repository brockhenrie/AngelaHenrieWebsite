import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './AdminRouting.module';
import { ProductControlComponent } from './product-control/product-control.component';
import { EventTableComponent } from './event-table/event-table.component';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductControlComponent,
    EventTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [
    AdminComponent,
    DashboardComponent,
    ProductControlComponent,

  ]
})
export class AdminModule { }
