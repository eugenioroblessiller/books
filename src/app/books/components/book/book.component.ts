import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { showErrorDialog } from 'src/app/helpers/helpers';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

import { BooksService } from '../../services/books.service';
import { IBook } from './../../interfaces/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ViewChild("bookLoader", { static: true }) loader!: LoaderComponent;

  @Input() book!: IBook

  @Output() newBookEventEmitter = new EventEmitter<IBook>();

  constructor(
    private _booksService: BooksService,
    private _modal: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  async addBookToWishList(book: IBook) {
    book.isInWishList = !book.isInWishList
    this.loader.show()
    try {
      const res = await this._booksService.updateBook(book)
      console.log(res)
      this.newBookEventEmitter.emit(res)
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
      showErrorDialog('Error', `There was an error, please try agin latter`, 'OK', this._modal);
    }
  }
}
