import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { AngularFireAuthGuard, canActivate, hasCustomClaim } from '@angular/fire/compat/auth-guard';
import { adminOnly, redirectUnauthorizedToLogin } from '../../auth/authGuards/authGuards'



const routes: Routes = [
  {path:'Products', component: ProductsComponent},
    {path:'Products/view/:id', component: ViewProductComponent},
    {path:'Products/view/:id/edit', component: ViewProductComponent},
    {path:'Products/addProduct', component:AddProductComponent },


]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    AddProductComponent,


  ],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
     ],

     exports: [
     ]




})
export class ProductModule { }
