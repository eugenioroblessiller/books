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
  private userSubject: BehaviorSubject<any>;

  private baseUrl: string = environment.baseUrl;

  private user: IUser = { id: 1, name: "Eugenio Robles", email: "eugenio@gmail.com" }

  constructor(
    private _http: HttpClient

  ) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
    if (this.userSubject.value) {
      this.isAuthenticated.next(true)
    } else {
      this.isAuthenticated.next(false)
    }
  }

  /**
   * We're creating a new promise that will resolve after a timeout of 1000ms (Simulation).
   *
   * The promise will resolve with an object that has a message property with the value of
   * "authenticated".
   *
   * We're also setting the currentUser in localStorage to the user object we created earlier.
   *
   * We're also setting the userSubject to the user object we created earlier.
   *
   * We're also setting the isAuthenticated subject to true.
   * @param {string} email - string, password: string
   * @param {string} password - string - The password of the user
   * @returns A promise that resolves to an object with a message property.
   */
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // console.log(email, password)
      setTimeout(() => {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.userSubject.next(this.user);
        this.isAuthenticated.next(true)
        resolve({ message: "authenticated" })
      }, 1000);

    })
  }

  /**
   * It clears the local storage, sets the isAuthenticated subject to false, and sets the userSubject to
   * null
   */
  logout() {
    localStorage.clear()
    this.isAuthenticated.next(false)
    this.userSubject.next(null!);
  }

}

