import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, shareReplay, tap } from 'rxjs/operators';
import { pathToFileURL } from 'url';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService implements OnInit {

  private productTypes = ['Necklace', 'Bracelets', 'Earrings', 'Rings', 'Other','All'];

  totalProducts!: string;


  productsRef: AngularFirestoreCollection<Product> =this.firestore.collection<Product>('Products');
  products$: Observable<Product[]> = this.productsRef.valueChanges()
  .pipe(

    tap(res => {console.log(res);
    this.totalProducts = res.length.toString()}),
    shareReplay(1),
    catchError(err => {
      console.log(err);
      return EMPTY
    })
  );




  //storage
  uploadPercent!: Observable<number>;
  downloadURL!: Observable<string>;





  constructor(
    private firestore: AngularFirestore,
    private storage:AngularFireStorage){

    }



  ngOnInit(): void {

  }

  getProductTypes(){
    return [...this.productTypes];

  }

  addProduct(product: Product) {
    // Persist a document id
     product.id = this.firestore.createId();
    this.productsRef.add(product);
    console.log(product);
  }

  updateProduct(id:string,product: Product){
    this.productsRef.doc(id).update(product)
    .catch(err=>alert(err))
    .then(()=> alert('Product: '+id+" was updated!"))
  }

  deleteProduct(id:string){
   this.productsRef.doc(id).delete()
   .catch(err => {
     alert(err);
   })
   .then(()=> alert("Product: "+id+" was deleted!"));
  }



  uploadPhoto(imagePath: any, id:string) {
    const filePath = '/ProductPhotos/' + id;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, imagePath);

    return fileRef;
  }





}
