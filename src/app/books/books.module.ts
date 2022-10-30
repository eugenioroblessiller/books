import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';



@NgModule({
  declarations: [
    IndexComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BooksModule { }
