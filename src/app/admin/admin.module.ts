import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Route} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './AdminRouting.module';




@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class AdminModule { }
