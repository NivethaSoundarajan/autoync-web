import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QualityassuranceComponent } from 'src/app/qualityassurance/qualityassurance.component';
import { ReadingsComponent } from 'src/app/readings/readings.component';
import { TransferstatusComponent } from 'src/app/transferstatus/transferstatus.component';
import { UsercreationComponent } from 'src/app/usercreation/usercreation.component';
import { DashOverviewComponent } from './dash-overview/dash-overview.component';
import { QualitycheckComponent } from './qualitycheck/qualitycheck.component';

const routes: Routes = [
  { path: '',redirectTo: 'login',pathMatch: 'full',},
  { path: 'login',      component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent  },
  { path: 'dash-overview',  component: DashOverviewComponent },
  { path: 'usercreation',  component:UsercreationComponent  },
  { path: 'transferstatus',  component: TransferstatusComponent },
  // { path: 'imagestatus',  component: ImagestatusComponent },
  { path: 'readings',component:ReadingsComponent},
  // { path: 'accounthistory',component:AccounthistoryComponent},
  { path: 'qualityassurance',component:QualityassuranceComponent},
  { path: 'qualitycheck',component:QualitycheckComponent},
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //   }]
  // }
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
