import { Component, OnInit } from '@angular/core';
import { AuthModule } from 'src/app/auth/auth.module';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user$ = this.auth.user$;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
