import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from 'src/app/users/interfaces/user';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null)
  private userSubject: BehaviorSubject<IUser>;

  private baseUrl: string = environment.baseUrl;

  private user: IUser = { id: 1, name: "Lucian Termure", email: "lucian.termure@gmail.com" }

  constructor(
    private _http: HttpClient

  ) {
    this.userSubject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser')!));
    if (this.userSubject) this.isAuthenticated.next(false)
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      console.log(email, password)
      setTimeout(() => {
        this.isAuthenticated.next(true)
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.userSubject.next(this.user);
        resolve({ message: "authenticated" })
      }, 1000);

    })
  }

  logout() {
    localStorage.clear()
    this.isAuthenticated.next(false)
    this.userSubject.next(null!);
  }

}

