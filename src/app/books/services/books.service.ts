import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IBook } from '../interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * "Get the books from the server and return the last value from the observable."
   *
   * The first line of the function is a template string that combines the baseUrl with the path to the
   * books resource
   * @returns An observable of an array of IBook objects.
   */
  getBooks() {
    const url = `${this.baseUrl}/books`
    return lastValueFrom(this._http.get<IBook[]>(url))
  }

  /**
   * It returns the last value from an observable that is created by calling the http.get function
   * @returns An observable of an array of IBook objects.
   */
  getWishList() {
    const url = `${this.baseUrl}/books`
    return lastValueFrom(this._http.get<IBook[]>(url))
  }

  /**
   * It takes a book object, sends it to the server, and returns the book object that the server sends
   * back
   * @param {IBook} book - IBook - this is the book object that we are passing to the API.
   * @returns The last value from the observable.
   */
  createBook(book: IBook) {
    const url = `${this.baseUrl}/books`
    return lastValueFrom(this._http.post<IBook>(url, book))
  }

  /**
   * It returns the last value from an observable that is created by making a GET request to the API
   * @param {IBook} book - IBook - this is the book that we want to read.
   * @returns The last value from the observable.
   */
  readBook(book: IBook) {
    const url = `${this.baseUrl}/books/${book.id}`
    return lastValueFrom(this._http.get<IBook>(url))
  }

  /**
   * It takes a book object, and returns an observable that emits the updated book object
   * @param {IBook} book - IBook - the book object that we want to update
   * @returns The last value from the observable.
   */
  updateBook(book: IBook) {
    const url = `${this.baseUrl}/books/${book.id}`
    return lastValueFrom(this._http.put<IBook>(url, book))
  }

  /**
   * It takes a book object as an argument, and returns an observable of the deleted book
   * @param {IBook} book - IBook - the book to be deleted
   * @returns The last value from the observable.
   */
  deleteBook(book: IBook) {
    const url = `${this.baseUrl}/books/${book.id}`
    return lastValueFrom(this._http.delete<IBook>(url))
  }
}
