import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';
import { DialogComponent } from './dialog/dialog.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent,
    SnackbarComponent
  ],
  providers: [],
})
export class SharedModule { }
