import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductItemComponent } from './product-item/product-item.component';




const routes: Routes = [
  {path:'', component: ProductsComponent, children:[
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component:ProductListComponent},
    {path:'product/:id', component: ProductItemComponent},
    {path:'product/:id/edit', component: ProductItemComponent},
    {path:'addProduct', component:AddProductComponent },
  ]},



]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
