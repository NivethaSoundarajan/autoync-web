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
import { AuthGuard } from '../app/helper/authguard/auth.guard';
import { ReadingsComponent } from './readings/readings.component';
import { AccounthistoryComponent } from './accounthistory/accounthistory.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { QualityCheckComponent } from './quality-check/quality-check.component';
import { BillsComponent } from './bills/bills.component';
import { ViewpageComponent } from './viewpage/viewpage.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'usercreation/:Id/:visibility', component: UsercreationComponent, canActivate: [AuthGuard] },
  { path:'viewpage/:Id/:visibility', component: ViewpageComponent, canActivate: [AuthGuard] },
  { path: 'transferstatus', component: TransferstatusComponent, canActivate: [AuthGuard] },
  { path: 'imagestatus/:Id', component: ImagestatusComponent, canActivate: [AuthGuard] },
  { path: 'readings', component: ReadingsComponent, canActivate: [AuthGuard] },
  { path: 'bills', component: BillsComponent, canActivate: [AuthGuard] },
  { path: 'accounthistory', component: AccounthistoryComponent, canActivate: [AuthGuard] },
  { path: 'qualityassurance', component: QualityAssuranceComponent, canActivate: [AuthGuard] },
  { path: 'qualitycheck', component: QualityCheckComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
