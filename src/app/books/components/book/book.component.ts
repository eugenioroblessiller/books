import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { showErrorDialog, showSnackBar } from 'src/app/helpers/helpers';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
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
  @Output() deleteBookEventEmitter = new EventEmitter<IBook>();

  constructor(
    private _booksService: BooksService,
    private _modal: MatDialog,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  async toggleBookInWishList(book: IBook) {
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

  askBeforeDelete(book: IBook) {
    const message = `Are you sure you want to delete the book: ${book.title}?`
    const config: MatDialogConfig = { data: { message, title: "DELETE BOOK", color:"warn" }, width: '300px' }

    const modal = this._modal.open(ConfirmDialogComponent, config);
    modal.afterClosed().subscribe(confirmed => {
      if (confirmed) { this.deleteBook(book); }
    });
  }

  async deleteBook(book: IBook) {
    this.loader.show()
    try {
      const res = await this._booksService.deleteBook(book)
      this.deleteBookEventEmitter.emit(res)
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
      showErrorDialog("Error", "Something went wrong, we couldn't delete the book", "OK", this._modal)
    }
  }
}
