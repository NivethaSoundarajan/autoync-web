
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { transHistory } from './modal';
import { AutoSyncService } from '../../service';


@Component({
  selector: 'app-transferstatus',
  templateUrl: './transferstatus.component.html',
  styleUrls: ['./transferstatus.component.css'],
  providers:[AutoSyncService]
})
export class TransferstatusComponent implements AfterViewInit{
  constructor(public route:Router,private service: AutoSyncService){}
  displayedColumns: string[] = ['Id', 'UserId', 'JobUniqueId', 'SourceFilePath','DestinationFilePath','TotalFileSize','Status','Reason','SyncType'];
  dataSource = new MatTableDataSource<transHistory>();  

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   var self=this;
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.service.GetTransferHistoryList()
   .subscribe((result) => { 
     self.dataSource= result.Data;
   },
   (err) => {},
   () => { });
 }


}

  
