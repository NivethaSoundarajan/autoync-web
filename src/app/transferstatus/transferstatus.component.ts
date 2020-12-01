import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute,Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';
import { transHistory } from './modal';
import { AutoSyncService } from '../../service';
import { FormControl } from '@angular/forms';
import {ToastService} from 'ng-uikit-pro-standard';
import * as XLSX from 'xlsx';

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
  isLoading:boolean=false;

  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService) {
    this.dataSourceOne=new MatTableDataSource; 
    this.selectedDataSource =new MatTableDataSource;
  }
  ngOnInit() {
   var self=this;
   this.isLoading=true;
   this.service.GetTransferHistoryList()
   .subscribe((result) => {
     if(result != null && result.Status){
      self.dataSourceOne.data = result.Data;
      self.selectedDataSource.data = result.Data;
     }
     self.isLoading=false;
   },
   (err) => {self.isLoading=false;},
   () => { });
   this.selectedDataSource.paginator = this.tableOnePaginator;
   this.selectedDataSource.sort = this.tableOneSort;
 }

 applyFilterOne(filterValue: string) {
   this.selectedDataSource.filter = filterValue.trim().toLowerCase();
 }

 exportAsExcel(){
  /* table id is passed over here */   
  let data = [];
  var id = 1;
  this.selectedDataSource.data.forEach(function(x){
     data.push({'sno' : id,'Date' : x.CreatedDate,'Sync Type':x.SyncType,'Transfer Id':x.JobUniqueId,'User Name':x.Username,'Supervisor':x.SupervisorName,'Size':x.TotalFileSize,'SourceFilePath':x.SourceFilePath,'Photo':(x.Photos !=null)?x.Photos.Total+'/'+x.Photos.Completed :'0 / 0','Excel':(x.Excel !=null)?x.Excel.Total+'/'+x.Excel.Completed :'0 / 0','Status':x.Status})
     id++;
   });
   const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'TransferHistory'+new Date()+'.xlsx');
}
 changeDate(){
  var lastDay= new Date(this.datepicker).setHours(0,0,0,0);
  var nextDay= new Date(this.datepicker).setHours(24,0,0,0)
  this.selectedDataSource.data = this.dataSourceOne.data.filter(x=>(new Date(x.CreatedDate) > new Date(lastDay) && new Date(x.CreatedDate) < new Date(nextDay)))
 }
}



  
