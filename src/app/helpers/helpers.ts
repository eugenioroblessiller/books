import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DialogComponent } from '../shared/dialog/dialog.component';

import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

export function showSnackBar(message: string, snackbar: MatSnackBar) {
  const data = {
    message
  };
  const config: MatSnackBarConfig = { panelClass: 'snackbar-container', data, duration: 5 * 1000, };
  snackbar.openFromComponent(SnackbarComponent, config);
}

export function showErrorDialog(title: string, message: string, buttonMessage: string, modal: MatDialog) {
  const data = {
    title,
    message,
    buttonMessage
  };
  const config: MatDialogConfig = { panelClass: 'gnrl-dialog', data };
  const m = modal.open(DialogComponent, config);

  m.afterClosed().subscribe(isConfirmed => {
    console.log(isConfirmed);
  });
}
