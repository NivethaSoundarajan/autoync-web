import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},

// {
//   path: '',
//   redirectTo: 'login',
//   pathMatch: 'full',
// },
{
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: '',
    loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]
}
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
