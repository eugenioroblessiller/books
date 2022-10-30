import { IBook } from './../../interfaces/books';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book!: IBook

  constructor() { }

  ngOnInit(): void {
  }


  addBookToWishList(book: IBook) {
    console.log('book to add --->', book)
  }
}
