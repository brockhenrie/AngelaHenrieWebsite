import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  uploadPercent!: Observable<any>;
  downloadUrl!: Observable<string>;
  imagePath!:string;

  file!:any;


  newProduct = this.fb.group({
    name: 'New Item',
    productType: 'Necklace',
    imagePath: '',
    price: 5,
    size: 6,
    oneOfOne: false,
    quantity: 1,
    description: 'A new Item',
    id: 'null',
    special: false,
    instructions: null

  })
  productTypes!: string[];

  constructor(private fb: FormBuilder,private pd: ProductDataService,
    private storage:AngularFireStorage) { }

  ngOnInit(): void {
    this.productTypes = this.pd.getProductTypes();
  }

  selectPhoto(event:any){
    this.file = event;
    console.log(this.file)
  }
  uploadPhoto(event:any) {
    const file = event.target.files[0];
    const filePath = 'ProductPhotos/'+this.newProduct.value.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize(()=> this.downloadUrl = fileRef.getDownloadURL())
    )
    .subscribe()
  }

  getImagePath(name:string){
   return this.storage.ref('ProductPhotos/'+name).getDownloadURL().subscribe();
   }

  onAddNewProduct(){

    this.uploadPhoto(this.file);
    const imageP = this.getImagePath(this.newProduct.value.name);
    var newProduct = {
      name: this.newProduct.value.name,
      productType:this.newProduct.value.productType,
      imagePath: imageP,
      price: this.newProduct.value.price,
      size: this.newProduct.value.size,
      oneOfOne: false,
      quantity: this.newProduct.value.quantity,
      description: this.newProduct.value.description,
      id: 'null',
      special: false,
      instructions: ''

    };
    console.log(newProduct.imagePath)
    // this.pd.addProduct(newProduct);



  }
  // upload(event: { target: { files: any[]; }; }) {
  //   // create a random id
  //   const randomId = Math.random().toString(36).substring(2);
  //   // create a reference to the storage bucket location
  //   this.ref = this.afStorage.ref(randomId);
  //   // the put method creates an AngularFireUploadTask
  //   // and kicks off the upload
  //   this.task = this.ref.put(event.target.files[0]);
  // }



}
