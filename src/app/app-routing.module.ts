import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'Home' , component: HomeComponent},
  {path:'Cart', component: ShoppingcartComponent},
  {path:'**' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
