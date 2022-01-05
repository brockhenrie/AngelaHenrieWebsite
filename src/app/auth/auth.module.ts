import { AuthRoutingModule } from './AuthRouting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule
  ],
  exports: [
    ReactiveFormsModule,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    FormsModule
  ],
})
export class AuthModule {
  user$: any;
}
