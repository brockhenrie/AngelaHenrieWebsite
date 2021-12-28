import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthModule } from 'src/app/auth/auth.module';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { User } from '../user.model';
import { userInfo } from 'os';

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
