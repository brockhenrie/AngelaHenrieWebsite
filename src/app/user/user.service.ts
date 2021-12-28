import { userInfo } from 'os';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersRef: AngularFirestoreCollection<User> =this.firestore.collection<User>('users');


  constructor(private firestore: AngularFirestore) { }

  getUser(uid:string):Observable<User>{
  return this.usersRef.doc(uid).valueChanges().pipe(
    map(userInfo => ({...userInfo as User}))
  );

  }
}
