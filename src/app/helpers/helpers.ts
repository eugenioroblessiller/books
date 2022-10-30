import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DialogComponent } from '../shared/dialog/dialog.component';

import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

/**
 * Genereics
 * It takes a message and a snackbar as parameters, and then it shows a snackbar with the message
 * @param {string} message - The message to be displayed in the snackbar.
 * @param {MatSnackBar} snackbar - MatSnackBar - This is the snackbar service that we imported from
 * @angular/material.
 */
export function showSnackBar(message: string, snackbar: MatSnackBar) {
  const data = {
    message
  };
  const config: MatSnackBarConfig = { panelClass: 'snackbar-container', data, duration: 5 * 1000, };
  snackbar.openFromComponent(SnackbarComponent, config);
}

/**
 * Genereics
 * It opens a dialog with a title, message, and button message
 * @param {string} title - The title of the dialog
 * @param {string} message - The message to be displayed in the dialog.
 * @param {string} buttonMessage - The text that will be displayed on the button.
 * @param {MatDialog} modal - MatDialog - this is the modal service that you imported from
 * @angular/material
 */
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
