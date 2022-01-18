import { Product } from 'src/app/products/product.model';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../product-control/product-control.component';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductDataService } from 'src/app/services/product-data.service';




@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
// @Component({
//   selector: 'dialog-data-example-dialog',
//   templateUrl: 'dialog-data-example-dialog.html',
// })
export class EditProductComponent implements OnInit {

  editMode = false;

  selectedFileName!:any;

  newProduct = this.fb.group({
    name: this.product.name,
    productType: this.product.productType,
    imagePath: this.product.imagePath,
    price: this.product.price,
    size: this.product.size,
    oneOfOne: this.product.oneOfOne,
    quantity: this.product.quantity,
    description: this.product.description,
    id: this.product.id,
    special: this.product.special,
    instructions: this.product.instructions

  })


  editProduct = this.fb.group({
    name: this.product.name,
    productType: this.product.productType,
    imagePath: this.product.imagePath,
    price: this.product.price,
    size: this.product.size,
    oneOfOne: this.product.oneOfOne,
    quantity: this.product.quantity,
    description: this.product.description,
    id: this.product.id,
    special: this.product.special,
    instructions: this.product.instructions

  })

  productImage = this.fb.group({
   imagePath: ''
  })

  productTypes!: string[];
  uploadPercent!: Observable<any>;
  downloadURL!: Observable<string>;
  imagePath!:any;

  constructor(
    private fb: FormBuilder,
    private pd: ProductDataService,
    @Inject(MAT_DIALOG_DATA) public product:DialogData
   ) { }

  ngOnInit(): void {
    this.productTypes = this.pd.getProductTypes();
    this.editMode = this.product.editMode
  }



  upload(event:any){
    this.imagePath = event.target.files[0];

  }

  uploadPhoto(){
    const fileRef= this.pd.uploadPhoto(this.imagePath, this.newProduct.value.id);
  }


  onUpdateProduct(){

  }





  onAddNewProduct(){
    const newProduct = {
      name: this.newProduct.value.name,
      productType:this.newProduct.value.productType,
      imagePath: '',
      price: this.newProduct.value.price,
      size: this.newProduct.value.size,
      oneOfOne: false,
      quantity: this.newProduct.value.quantity,
      description: this.newProduct.value.description,
      id: '',
      special: false,
      instructions: ''
    };

    this.pd.addProduct(newProduct);
  }









}

