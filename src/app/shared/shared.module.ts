import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './dialog/dialog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { IconComponent } from './icon/icon.component';
import { LoaderComponent } from './loader/loader.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent,
    SnackbarComponent,
    ConfirmDialogComponent,
    IconComponent,
    InfoCardComponent
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
    IconComponent,
    InfoCardComponent
  ],
  providers: [],
})
export class SharedModule { }
