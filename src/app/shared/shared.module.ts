import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent,
    SnackbarComponent,
    ConfirmDialogComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent,
    SnackbarComponent,
    IconComponent
  ],
  providers: [],
})
export class SharedModule { }
