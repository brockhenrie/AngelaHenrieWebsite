import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent implements OnInit, OnDestroy{


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


smallLogo = 'https://firebasestorage.googleapis.com/v0/b/angela-henrie.appspot.com/o/IMG_1502.jpg?alt=media&token=8ad1694b-9f61-432a-9bd3-466bc752c01b';
  user$= this.auth.user$;
  isLoggedIn = false;

  backgroundImage!: string ;


  links = [
    {path: 'home', icon: 'home', name:'Home'},
    {path:'products', icon: '', name:'Products'},
    {path:'cart', icon: 'shopping_cart', name:'Cart'},
    {path:'admin', icon: '', name: 'Admin'},
    {path:'blog', icon: '', name: 'Blog'}
  ];



  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth:AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.isLoggedIn$.pipe(
      map(val => this.isLoggedIn = val)
    )
    .subscribe(val=>
      console.log("Logged in: "+ val)
    )



  }

  logout(){
    this.auth.logout();
  }

  ngOnDestroy(): void {

  }

}
