import { ProductsComponent } from './products/products.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';



const routes: Routes = [
  {path:'', component: ProductsComponent},
    {path:'view/:id', component: ViewProductComponent},
    {path:'view/:id/edit', component: ViewProductComponent},
    {path:'addProduct', component:AddProductComponent },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
