import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _modal: MatDialog,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  askBeforeLogout() {
    const message = "Are you sure you want to logout?"
    const config: MatDialogConfig = { data: { message, title: "LOGOUT" }, width: '300px' }

    const modal = this._modal.open(ConfirmDialogComponent, config);
    modal.afterClosed().subscribe(confirmed => {
      if (confirmed) { this.logout(); }
    });
  }

  logout() {
    this._authService.logout()
    this._router.navigate(['auth/login'])
  }
}
