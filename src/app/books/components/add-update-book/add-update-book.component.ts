import { IModalResult } from './../../interfaces/modalResult';
import { IBook } from './../../interfaces/books';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update-book',
  templateUrl: './add-update-book.component.html',
  styleUrls: ['./add-update-book.component.css']
})
export class AddUpdateBookComponent implements OnInit {

  book!: IBook

  constructor(
    private _modal: MatDialogRef<AddUpdateBookComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.book = {
      id: '',
      isbn: '',
      title: '',
      isInWishList: false,
      subtitle: '',
      author: '',
      published: new Date,
      publisher: '',
      pages: 0,
      description: '',
      website: '',
    }
  }

  accept() {
    const result: IModalResult = {
      error: false,
      data: this.book
    }
    this._modal.close(result);
  }

  cancel() {
    this._modal.close();
  }
}
