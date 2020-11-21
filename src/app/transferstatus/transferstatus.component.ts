
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { transHistory } from './modal';
import { AutoSyncService } from '../../service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-transferstatus',
  templateUrl: './transferstatus.component.html',
  styleUrls: ['./transferstatus.component.css'],
  providers:[AutoSyncService]
})
export class TransferstatusComponent implements AfterViewInit{
  constructor(public route:Router,private service: AutoSyncService){}
  // displayedColumns: string[] = ['Id', 'JobUniqueId','UserId','SupervisorName','TotalFileSize','SourceFilePath','Photo','Excel','Status','action'];
  displayedColumns: string[] = ['Id', 'JobUniqueId','UserId','SupervisorName','TotalFileSize','SourceFilePath','Status','action'];
  dataSource = new MatTableDataSource<transHistory>();
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator; 
  selectedDataSource = new MatTableDataSource<transHistory>();  
  searchText = "";

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   var self=this;
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.service.GetTransferHistoryList()
   .subscribe((result) => {
     if(result != null && result.Status)
        self.selectedDataSource = self.dataSource= result.Data;
   },
   (err) => {},
   () => { });
 }
 search(){
  // this.selectedDataSource = this.dataSource.filter(x=>x.id.contains(this.searchText));
 }

 public doFilter = (value: string) => {
  this.dataSource.filter = value.trim().toLocaleLowerCase();
}

}

  
