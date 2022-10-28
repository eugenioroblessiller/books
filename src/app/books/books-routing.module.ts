import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'list', component: IndexComponent },
      { path: 'wish-list', component: WishListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
