import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { viewValues} from './modal';
import { UserListService } from './service';


@Component({
  selector: 'app-dash-overview',
  templateUrl: './dash-overview.component.html',
  styleUrls: ['./dash-overview.component.css'],
  providers: [UserListService]
})
export class DashOverviewComponent implements AfterViewInit {
  constructor(public route:Router,private service: UserListService){}
  displayedColumns: string[] = ['sno','username','password','jobid','supervisor','folderpath','deviceid','action'];
  dataSource = new MatTableDataSource<viewValues>(dashView);  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.service.GetUserList()
      .subscribe((result) => { 
        
      },
      (err) => {},
      () => { });
 }
}

const dashView: viewValues[] = [
//  {sno: 1, username:'Kishore',password:'1234512',jobid:'Technician',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963215',action:''},
//  {sno: 2, username:'satheesh',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 3, username:'aswini',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 4, username:'priya',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 5, username:'sam',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 6, username:'adhvik',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 7, username:'krishna',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 8, username:'vijay',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 9, username:'ram',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''},
//  {sno: 10, username:'aravindth',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''}

];
  

