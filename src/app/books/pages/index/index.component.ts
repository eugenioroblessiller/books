import { MatSnackBar } from '@angular/material/snack-bar';
import { showErrorDialog, showSnackBar } from 'src/app/helpers/helpers';
import { IModalResult } from './../../interfaces/modalResult';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { AddUpdateBookComponent } from '../../components/add-update-book/add-update-book.component';

import { IBook } from '../../interfaces/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild("booksLoader", { static: true }) loader!: LoaderComponent;

  books: IBook[] = []

  constructor(
    private _booksService: BooksService,
    private _modal: MatDialog,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  async getBooks() {
    this.loader.show()
    try {
      const res = await this._booksService.getBooks()
      console.log(res)
      this.books = res.filter(book => book.isInWishList == false)
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
    }
  }

  bookEdited(book: IBook) {
    const index = this.books.findIndex(obj => obj.id == book.id)
    this.books.splice(index, 1)
    showSnackBar(`Book: ${book.title} has enter your wish list :)`, this._snackbar)
  }

  openModalToAddBook() {
    const data: any = { mode: 'new' };
    const config: MatDialogConfig = { panelClass: 'gnrl-dialog', width: '1200px', data }

    const modal = this._modal.open(AddUpdateBookComponent, config);
    modal.afterClosed().subscribe(async (result: IModalResult) => {
      console.log(result)
      if (result == undefined) return;
      if (result.error) { showErrorDialog('Error', "There was an error in the books dialog", "Try again", this._modal) }
      else {
        await this.createNewBook(result);
      }
    });
  }


  private async createNewBook(result: IModalResult) {
    this.loader.show();
    try {
      const res = await this._booksService.createBook(result.data);
      console.log(res);
      this.books.push(res)
      this.loader.hide();
      showSnackBar("Your new book has just been added", this._snackbar);
    } catch (error) {
      console.error(error);
      this.loader.hide();
      showErrorDialog('Error', "There was trying to add your new book, try again latter", "Try again", this._modal);
    }
  }
}
