import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from './../material/material.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ErrorPageComponent,
    LoaderComponent
  ],
  providers: [],
})
export class SharedModule { }
