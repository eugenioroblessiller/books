import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null)

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _http: HttpClient

  ) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      console.log(email, password)
      setTimeout(() => {
        this.isAuthenticated.next(true)
        localStorage.setItem('currentUser', JSON.stringify('youCanPass -> insert user data here'));
        resolve({ message: "authenticated" })
      }, 1000);
    })
  }

  logout() {
    localStorage.clear()
    this.isAuthenticated.next(false)
  }

}

