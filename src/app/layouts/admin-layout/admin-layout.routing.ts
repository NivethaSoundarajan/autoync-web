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
      { path: 'admin/dash-overview',  component: DashOverviewComponent },
      { path: 'admin/usercreation',  component:UsercreationComponent  },
      { path: 'admin/transferstatus',  component: TransferstatusComponent },
      { path: 'admin/imagestatus',  component: ImagestatusComponent },
      { path: 'admin/readings',component:ReadingsComponent},
      { path: 'admin/accounthistory',component:AccounthistoryComponent},
      { path: 'admin/qualityassurance',component:QualityassuranceComponent},
      { path: 'admin/qualitycheck',component:QualitycheckComponent},

    
];
