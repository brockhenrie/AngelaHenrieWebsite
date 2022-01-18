import { ProductControlComponent } from './product-control/product-control.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './productRouting.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    AddProductComponent,
    ProductControlComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  providers:[

  ],
  exports: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    AddProductComponent,
    ProductControlComponent
  ]
})
export class ProductsModule { }
