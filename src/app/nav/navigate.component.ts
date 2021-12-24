import { Component, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit, OnDestroy{
smallLogo = 'https://firebasestorage.googleapis.com/v0/b/angela-henrie.appspot.com/o/ProductPhotos%2FIMG_1502.jpg?alt=media&token=0a455c30-1700-4105-9756-7e7fbd82c921';
  user$= this.auth.user$;
  isLoggedIn = false;

  backgroundImage!: string ;


  links = [
    {path: 'Home', icon: 'home'},
    {path:'Products', icon: ''},
    {path:'Cart', icon: 'shopping_cart'},
  ];


  constructor(
    private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.isLoggedIn$.pipe(
      map(val => this.isLoggedIn = val)
    )
    .subscribe(val=>
      console.log(val)
    )



  }

  logout(){
    this.auth.logout();
  }

  ngOnDestroy(): void {

  }

}
