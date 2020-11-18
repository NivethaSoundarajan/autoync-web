import { Routes } from '@angular/router';
import { ImagestatusComponent } from 'src/app/imagestatus/imagestatus.component';
import { LoginComponent } from 'src/app/login/login.component';
import { TransferstatusComponent } from 'src/app/transferstatus/transferstatus.component';
import { UsercreationComponent } from 'src/app/usercreation/usercreation.component';
import { DashOverviewComponent } from '../../dash-overview/dash-overview.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';



export const AdminLayoutRoutes: Routes = [
      { path: 'admin/dash-overview',  component: DashOverviewComponent },
      { path: 'admin/usercreation',  component:UsercreationComponent  },
      { path: 'admin/transferstatus',  component: TransferstatusComponent },
      { path: 'admin/imagestatus',  component: ImagestatusComponent },
      
];
