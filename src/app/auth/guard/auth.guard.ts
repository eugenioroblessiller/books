import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._authService.isAuthenticated.pipe(
      filter(val => val !== null), take(1), map(isAuthenticated => {
        console.log(isAuthenticated)
        if (isAuthenticated) {
          return true
        } else {
          this._router.navigate(['auth/login'])
          return false
        }
      })
    )
  }

}
