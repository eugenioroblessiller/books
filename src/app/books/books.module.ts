import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
