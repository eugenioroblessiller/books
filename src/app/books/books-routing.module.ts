import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'list', component: IndexComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
