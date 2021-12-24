import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingCartRoutingModule} from './shoppingCartRouting.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ShoppingCartRoutingModule,

  ]
})
export class ShoppingCartModule { }
