import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { UIModule } from '../shared/ui/ui.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'UserInfo', component: UserInfoComponent}
]

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UIModule,

    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
