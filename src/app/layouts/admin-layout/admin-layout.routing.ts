import { Routes } from '@angular/router';
import { AccounthistoryComponent } from 'src/app/accounthistory/accounthistory.component';
import { ImagestatusComponent } from 'src/app/imagestatus/imagestatus.component';
import { LoginComponent } from 'src/app/login/login.component';
import { QualityassuranceComponent } from 'src/app/qualityassurance/qualityassurance.component';
import { ReadingsComponent } from 'src/app/readings/readings.component';
import { TransferstatusComponent } from 'src/app/transferstatus/transferstatus.component';
import { UsercreationComponent } from 'src/app/usercreation/usercreation.component';
import { DashOverviewComponent } from '../../dash-overview/dash-overview.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { QualitycheckComponent } from '../../qualitycheck/qualitycheck.component';



export const AdminLayoutRoutes: Routes = [
      // { path: '',      component: LoginComponent},
      // { path: 'dashboard',      component: DashboardComponent },
      { path: 'dash-overview',  component: DashOverviewComponent },
      { path: 'usercreation',  component:UsercreationComponent  },
      { path: 'transferstatus',  component: TransferstatusComponent },
      { path: 'imagestatus',  component: ImagestatusComponent },
      { path: 'readings',component:ReadingsComponent},
      { path: 'accounthistory',component:AccounthistoryComponent},
      { path: 'qualityassurance',component:QualityassuranceComponent},
      { path: 'qualitycheck',component:QualitycheckComponent},

    
];
