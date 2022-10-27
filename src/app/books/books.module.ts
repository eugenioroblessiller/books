import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './pages/index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class BooksModule { }
