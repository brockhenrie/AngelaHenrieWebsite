import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FirebaseModule } from './firebase/firebase.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NavigateComponent } from './nav/navigate.component';


@NgModule({

  declarations: [
    AppComponent,
    NavigateComponent,
    HomeComponent,


],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FirebaseModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
