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

  getBooks() {
    const url = `${this.baseUrl}/books`
    return lastValueFrom(this._http.get<IBook[]>(url))
  }

  getWishList() {
    const url = `${this.baseUrl}/books`
    return lastValueFrom(this._http.get<IBook[]>(url))
  }

  createBook() {

  }

  readBook() {

  }

  updateBook() {

  }

  deleteBook() {

  }
}
