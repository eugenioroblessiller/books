import { DialogComponent } from './../../../shared/dialog/dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';
import { IUser } from 'src/app/users/interfaces/user';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

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
      this.showSnackBar('Email is needed')
      return
    }
    if (this.user.password.length == 0) {
      this.showSnackBar('Password is needed')
      return
    }
    this.loader.show()
    try {
      const res: any = await this._authService.login(this.user.email, this.user.password)
      console.log(res)
      if (res.message == 'authenticated') {
        this._router.navigate(['books/list'])
      }
      this.loader.hide()
    } catch (error) {
      console.error(error)
      this.loader.hide()
      this.showErrorDialog();
    }
  }

  private showSnackBar(message: any) {
    const data = {
      message
    };
    const config: MatSnackBarConfig = { panelClass: 'snackbar-container', data, duration: 5 * 1000, };
    this._snackBar.openFromComponent(SnackbarComponent, config);
  }

  private showErrorDialog() {
    const data = {
      title: "Error",
      message: `There was an error, please try agin latter`,
      buttonMessage: 'OK'
    };
    const config: MatDialogConfig = { panelClass: 'gnrl-dialog', data };
    const modal = this._modal.open(DialogComponent, config);

    modal.afterClosed().subscribe(isConfirmed => {
      console.log(isConfirmed);
    });
  }
}
