import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guard/auth.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: '', component: AuthLayoutComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    ]
  },
  {
    path: '', component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    ]
  },

  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
