import { MatSnackBar } from '@angular/material/snack-bar';
import { showSnackBar } from 'src/app/helpers/helpers';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

import { IBook } from '../../interfaces/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  @ViewChild("whislistLoader", { static: true }) loader!: LoaderComponent;

  books: IBook[] = []

  constructor(
    private _booksService: BooksService,
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
      this.books = res.filter(book => book.isInWishList == true)
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
    }
  }


  bookEdited(book: IBook) {
    const index = this.books.findIndex(obj => obj.id == book.id)
    this.books.splice(index, 1)
    showSnackBar(`Book: ${book.title} has left the room`, this._snackbar)
  }
}
