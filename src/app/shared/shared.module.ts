import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorPageComponent,
    LoaderComponent,
    DialogComponent
  ],
  providers: [],
})
export class SharedModule { }
