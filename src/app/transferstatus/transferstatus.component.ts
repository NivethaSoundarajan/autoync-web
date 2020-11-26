import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
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
export class TransferstatusComponent implements OnInit {
  dataSourceOne: MatTableDataSource<transHistory>;
  selectedDataSource : MatTableDataSource<transHistory>;
  displayedColumns: string[] = ['Sno','CreatedDate','SyncType','JobUniqueId','Username','SupervisorName','TotalFileSize','SourceFilePath','Photo','Excel','Status','action'];
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;
  datepicker = new Date();

  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService) {
    this.dataSourceOne=new MatTableDataSource; 
    this.selectedDataSource =new MatTableDataSource;
  }
  ngOnInit() {
   var self=this;
   this.service.GetTransferHistoryList()
   .subscribe((result) => {
     if(result != null && result.Status)
      self.dataSourceOne.data = result.Data;
      self.selectedDataSource.data = result.Data;
   },
   (err) => {},
   () => { });
   this.selectedDataSource.paginator = this.tableOnePaginator;
   this.selectedDataSource.sort = this.tableOneSort;
 }

 applyFilterOne(filterValue: string) {
   this.selectedDataSource.filter = filterValue.trim().toLowerCase();
 }

 changeDate(){
  var lastDay= new Date(this.datepicker).setHours(0,0,0,0);
  var nextDay= new Date(this.datepicker).setHours(24,0,0,0)
  this.selectedDataSource.data = this.dataSourceOne.data.filter(x=>(new Date(x.CreatedDate) > new Date(lastDay) && new Date(x.CreatedDate) < new Date(nextDay)))
 }
}



  
