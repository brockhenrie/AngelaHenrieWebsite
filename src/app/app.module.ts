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
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


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
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
