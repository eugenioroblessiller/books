import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './pages/index/index.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BooksModule { }
