import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient

  ) { }

  /**
   * It returns the last value from an observable that is created by calling the http.get method
   * @returns An observable of an array of IUser objects.
   */
  getUsers() {
    const url = `${this.baseUrl}/users`
    return lastValueFrom(this._http.get<IUser[]>(url))
  }

  /**
   * It takes a user object, sends it to the server, and returns the response
   * @param {IUser} user - IUser - this is the user object that we are passing to the API.
   * @returns The last value from the observable.
   */
  createUser(user: IUser) {
    const url = `${this.baseUrl}/books`
    return lastValueFrom(this._http.post<IUser>(url, user))
  }

  /**
   * It takes a user object, and returns the last value from an observable that is created by making a
   * GET request
   * @param {IUser} user - IUser - this is the user object that we are passing in.
   * @returns The last value from the observable.
   */
  readUser(user: IUser) {
    const url = `${this.baseUrl}/books/${user.id}`
    return lastValueFrom(this._http.get<IUser>(url))
  }

  /**
   * It takes a user object, and returns an observable that emits the user object returned from the
   * server
   * @param {IUser} user - IUser - this is the user object that we are passing to the updateUser method.
   * @returns The last value from the observable.
   */
  updateUser(user: IUser) {
    const url = `${this.baseUrl}/books/${user.id}`
    return lastValueFrom(this._http.put<IUser>(url, user))
  }

  /**
   * It takes a user object, and then returns the last value from the observable
   * returned by the HTTP delete request
   * @param {IUser} user - IUser - this is the user object that we are passing in.
   * @returns The last value from the observable.
   */
  delteUser(user: IUser) {
    const url = `${this.baseUrl}/books/${user.id}`
    return lastValueFrom(this._http.delete<IUser>(url))
  }
}
