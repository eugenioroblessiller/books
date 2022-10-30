import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { showErrorDialog } from 'src/app/helpers/helpers';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

import { IBook } from '../../interfaces/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'book-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  @ViewChild("bookLoader", { static: true }) loader!: LoaderComponent;
  @ViewChild("bookTable") table!: MatTable<IBook>;

  @Input() books!: IBook[]
  @Input() columnsToDisplay: any[] = []
  @Input() expandedElement: any
  @Input() columnsToDisplayWithExpand: any[] = []

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
      this.table.renderRows()
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
      showErrorDialog('Error', `There was an error, please try agin latter`, 'OK', this._modal);
    }
  }

  askBeforeDelete(book: IBook) {
    const message = `Are you sure you want to delete the book: ${book.title}?`
    const config: MatDialogConfig = { data: { message, title: "DELETE BOOK", color: "warn" }, width: '300px' }

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
