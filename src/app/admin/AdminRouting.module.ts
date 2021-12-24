
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Route[] = [
  {path:'admin', canActivate: [], children:[
    {
      path:'dashboard',
      component: DashboardComponent}
  ]}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
