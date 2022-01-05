import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy{
  uid!:string;
  userSub!: Subscription;
  user!: User;

  constructor(private auth: AuthService,
    private userServ: UserService) { }

  ngOnInit(): void {
  this.userSub = this.userServ.getUser(this.uid).subscribe(userInfo =>
    this.user = userInfo);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }


}
