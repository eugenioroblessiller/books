import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient

  ) { }

  getUsers() {

  }

  createUser() {

  }

  readUser() {

  }

  updateUser() {

  }

  delteUser() {

  }
}
