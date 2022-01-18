import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnyTxtRecord } from 'dns';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class AddProductComponent implements OnInit {




  uploadPercent!: Observable<any>;
  downloadURL!: Observable<string>;
  imagePath!:any;

  newProduct = this.fb.group({
    name: '',
    productType: 'Necklace',
    imagePath: '',
    price: 50,
    size: 6,
    oneOfOne: false,
    quantity: 1,
    description: '',
    id: '',
    special: false,
    instructions: null

  })

  productImage = this.fb.group({
   imagePath: ''
  })

  productTypes!: string[];

  constructor(
    private fb: FormBuilder,
    private pd: ProductDataService,
   ) { }

  ngOnInit(): void {
    this.productTypes = this.pd.getProductTypes();
  }



  upload(event:any){
    this.imagePath = event.target.files[0];

  }

  uploadPhoto(){
    const fileRef= this.pd.uploadPhoto(this.imagePath, this.newProduct.value.id);
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
