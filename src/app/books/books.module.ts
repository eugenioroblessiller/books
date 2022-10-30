import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './components/book/book.component';
import { IndexComponent } from './pages/index/index.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { AddUpdateBookComponent } from './components/add-update-book/add-update-book.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    IndexComponent,
    WishListComponent,
    BookComponent,
    AddUpdateBookComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class BooksModule { }
