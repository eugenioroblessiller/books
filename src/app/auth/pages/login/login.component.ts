import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { showErrorDialog, showSnackBar } from 'src/app/helpers/helpers';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { IUser } from 'src/app/users/interfaces/user';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginLoader", { static: true }) loader!: LoaderComponent;

  user!: IUser;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _modal: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = {
      id: 0,
      name: '',
      email: '',
      password: ''
    }
  }

  async loginUser() {
    if (this.user.email.length == 0) {
      showSnackBar('Email is needed', this._snackBar)
      return
    }
    if (this.user.password!.length == 0) {
      showSnackBar('Password is needed', this._snackBar)
      return
    }
    this.loader.show()
    try {
      const res: any = await this._authService.login(this.user.email, this.user.password!)
      console.log(res)
      if (res.message == 'authenticated') {
        this._router.navigate(['books/list'])
      }
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
      showErrorDialog('Error', `There was an error, please try agin latter`, 'OK', this._modal);
    }
  }
}
