import { ShoppingcartComponent } from './shoppingCart/shoppingcart.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
{path:'', component: ShoppingcartComponent}

];

@NgModule({
  declarations:[
    ShoppingcartComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [
    ShoppingcartComponent,
    RouterModule]
})
export class ShoppingCartRoutingModule { }
