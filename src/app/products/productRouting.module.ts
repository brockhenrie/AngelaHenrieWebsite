import { ProductControlComponent } from './product-control/product-control.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductItemComponent } from './product-item/product-item.component';




const routes: Routes = [
  {path:'',  children:[
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component:ProductsComponent},
    {path:'product/:id', component: ProductItemComponent},
    {path:'product/:id/edit', component: ProductItemComponent},
    {path:'productControl', component: ProductControlComponent},
    {path:'addProduct', component:AddProductComponent },
  ]},



]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
