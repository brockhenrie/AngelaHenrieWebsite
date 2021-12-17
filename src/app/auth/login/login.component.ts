import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  login =this.fb.group({
    email: ['', [Validators.required,Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })



  authMode = 'Login';

  constructor(
    private auth: AuthService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
  }

  signInEmail(){
    this.auth.signInEmail(this.login.value.email,this.login.value.password);


  }

  signInGoogle(){
    this.auth.signInGoogle()
    if(true){
      this.router.navigate(['/Home']);
    }

  }




  getErrorMessage() {
    if (this.login.controls.error.hasError('required')) {
      return 'You must enter a value';
    }

    return this.login.controls.error.hasError('email') ? 'Not a valid email' : '';
  }


}
