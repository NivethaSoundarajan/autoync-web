import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferstatusComponent } from 'src/app/transferstatus/transferstatus.component';
import { UsercreationComponent } from 'src/app/usercreation/usercreation.component';
import { UserListComponent } from './user-List/user-List.component';
import { ImagestatusComponent } from './imagestatus/imagestatus.component';

const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch: 'full',},
  { path: 'login',      component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'userlist',  component: UserListComponent },
  { path: 'usercreation',  component:UsercreationComponent  },
  { path: 'transferstatus',  component: TransferstatusComponent },
  { path: 'imagestatus/:Id',  component: ImagestatusComponent },
  
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
