import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IndexComponent } from './pages/index/index.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
   ],
  exports: [],
  providers: [],
})
export class UsersModule {}
