import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './components/book/book.component';
import { IndexComponent } from './pages/index/index.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';



@NgModule({
  declarations: [
    IndexComponent,
    WishListComponent,
    BookComponent,
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
