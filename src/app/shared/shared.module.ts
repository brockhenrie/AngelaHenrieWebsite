
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';







@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatSelectModule,
    MatMenuModule,
    LayoutModule,
    MatGridListModule,
    MatStepperModule,
    MatDialogModule


  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatSelectModule,
    MatMenuModule,
    LayoutModule,
    MatGridListModule,
    MatStepperModule,
    MatDialogModule
  ]


})
export class SharedModule{ }
