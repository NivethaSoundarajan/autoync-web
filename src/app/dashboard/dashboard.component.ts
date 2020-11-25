import {AfterViewInit, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { userCreation } from './../usercreation/modal';
import { AutoSyncService } from '../../service';
import * as XLSX from 'xlsx';
import {ToastService} from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AutoSyncService]
})
export class DashboardComponent implements OnInit  {
  constructor(public route:Router,private service: AutoSyncService,private toast: ToastService){}
  public pieChartLabels:string[] = ['No of Received Files', 'No of Reads', 'No of Bills','No of Images'];
  public pieChartData:number[] = [40, 20, 20 ,10];
  public pieChartType:string = 'pie';
  techniciansCount : Number;
  qualityCheckCount:Number;
  adminCount:Number;

  // events
  public chartClicked(e:any):void {
    
  }
 
  public chartHovered(e:any):void {
    
  }

  ngOnInit()
  {
    var self = this;
    this.service.GetUserList()
    .subscribe((result) => { 
      var data = result.Data;
      this.techniciansCount = data.filter(x => x.RoleId == 5).length;
      this.qualityCheckCount = data.filter(x => x.RoleId == 4).length;
      this.adminCount = data.filter(x => x.RoleId == 1 || x.RoleId == 2).length;
    },
    (err) => {
      self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
    },
    () => { });
  }

  navigateToList(){
    this.route.navigate(["/userlist"]);
  }

}

