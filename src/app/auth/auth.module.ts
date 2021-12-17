import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { UIModule } from '../shared/ui/ui.module';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  {path: 'Auth',
  children: [
    { path: 'signup', component: SignupComponent },
    {path:'login', component: LoginComponent}
  ]}

];

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIModule,
    RouterModule.forChild(routes),
  ],
  exports: [ReactiveFormsModule, UIModule],
})
export class AuthModule {
  user$: any;
}
