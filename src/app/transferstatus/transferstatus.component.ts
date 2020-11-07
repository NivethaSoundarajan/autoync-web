
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-transferstatus',
  templateUrl: './transferstatus.component.html',
  styleUrls: ['./transferstatus.component.css']
})
export class TransferstatusComponent implements AfterViewInit{
  displayedColumns: string[] = ['sno', 'transferid', 'userid', 'supervisor','size','foldername','photo','reads','bills','overallstatus','action'];
  dataSource = new MatTableDataSource<autosync>(syncvalues);  

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 }
}

export interface autosync {
 sno: number;
 transferid: string;
 userid: string;
 supervisor: string;
 size:string;
 foldername:string;
 photo:string;
 reads:string;
 bills:number;
 overallstatus:string;
 action:string;
}

const syncvalues: autosync[] = [
 {sno: 1, transferid: '20-07-12345', userid:'MT041', supervisor: 'Kumar',size:'40MB',foldername:'C:/Mreaders',photo:'5/10',reads:'0/1',bills:1,overallstatus:'InProgress',action:'visibility'},
 {sno: 2, transferid: '20-07-23456', userid:'MT042', supervisor: 'Kumar',size:'300MB',foldername:'C:/Mreaders',photo:'6/10',reads:'1/1',bills:2,overallstatus:'completed',action:'Visibility'},

];
  
