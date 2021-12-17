import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Route} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Route[] = [
  {path:'admin', canActivate: [], children:[
    {path:'dashboard', component: DashboardComponent}
  ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
