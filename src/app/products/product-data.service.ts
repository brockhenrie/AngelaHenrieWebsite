import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import * as firebase from 'firebase/compat';
import { EMPTY, Observable } from 'rxjs';
import { catchError, finalize, map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService implements OnInit {

  private productTypes = ['Necklace', 'Bracelets', 'Earings', 'Rings', 'Other','All'];
// '../../../assets/photos/angela.jpg'
  totalProducts!: string;

  backgroundImage ='https://firebasestorage.googleapis.com/v0/b/angela-henrie.appspot.com/o/angela.jpg?alt=media&token=5fe77a07-1a39-4a85-915c-a9eb57918860';

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
     product.id = this.totalProducts
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

  getBackground(){
    return this.backgroundImage;
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
  }






}
