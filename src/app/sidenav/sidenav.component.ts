import { ProductDataService } from './../pages/products/product-data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy{
smallLogo = 'https://firebasestorage.googleapis.com/v0/b/angela-henrie.appspot.com/o/ProductPhotos%2FIMG_1502.jpg?alt=media&token=0a455c30-1700-4105-9756-7e7fbd82c921';
  user$= this.auth.user$;
  isLoggedIn = false;

  backgroundImage!: string ;


  links = [
    {path: 'Home', icon: 'home'},
    {path:'Products', icon: ''},
    {path:'Cart', icon: 'shopping_cart'},
  ];


  constructor(private prodData: ProductDataService,
    private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.isLoggedIn$.pipe(
      map(val => this.isLoggedIn = val)
    )
    .subscribe(val=>
      console.log(val)
    )

    this.backgroundImage = this.prodData.getBackground();

  }

  logout(){
    this.auth.logout();
  }

  ngOnDestroy(): void {

  }

}
