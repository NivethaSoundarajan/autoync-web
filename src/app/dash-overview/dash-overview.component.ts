
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-dash-overview',
  templateUrl: './dash-overview.component.html',
  styleUrls: ['./dash-overview.component.css']
})
export class DashOverviewComponent implements AfterViewInit {

  displayedColumns: string[] = ['sno','username','password','jobid','supervisor','folderpath','deviceid','action'];
  dataSource = new MatTableDataSource<viewValues>(dashView);  

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 }
}

export interface viewValues {
 sno: number;
 username:string;
 password:string;
 jobid:string;
 supervisor:string;
 folderpath:string;
 deviceid:string;
 action:string;
 
}

const dashView: viewValues[] = [
 {sno: 1, username:'Kishore',password:'1234512',jobid:'Technician',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963215',action:''},
 {sno: 2, username:'satheesh',password:'123987',jobid:'Admin',supervisor:'kumar',folderpath:'c:\mreaders',deviceid:'1658963216',action:''}

];
  

