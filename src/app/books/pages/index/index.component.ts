import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
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
    private _booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  async getBooks() {
    this.loader.show()
    try {
      const res = await this._booksService.getBooks()
      console.log(res)
      this.books = res
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
    }
  }

}
