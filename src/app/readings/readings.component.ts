import {AfterViewInit, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { ReadsModel,readsFilter}from '../../app/readings/modal';
import {AutoSyncService} from 'src/service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})

export class ReadingsComponent implements OnInit {
  dataSource: MatTableDataSource<ReadsModel>;
  readsFilter = new readsFilter();
  isLoading: boolean = true;
  ispageLoading: boolean = false;
  page: number = 0;
  startDate;
  endDate;
  

  displayedColumns: string[] = ['Sno','JobId','UserId','AccountNo','MeterNo','Source','ReadingValue','ReadingDate','Reason','HasImage','HasReadImage','ImageName','ReadType','ReadFlag','Remarks','Approved'];
    constructor(private router: Router, private route: ActivatedRoute, private service: AutoSyncService) { 
      this.dataSource = new MatTableDataSource;
    }
  ngOnInit() {
    this.getreadsList();
  }
  getreadsList(){
    var self = this;
    this.ispageLoading = true;
    this.service.GetreadsList(this.readsFilter) 
    .subscribe((result) => {
      if (result != null && result.Status) {
        self.dataSource.data = result.Data;
        self.isLoading = false;
        self.ispageLoading = false;
        self.page = self.readsFilter.Page;
      }
    },
      (err) => {
        self.isLoading = false;
      },
      () => { });
    
  }
  applyFilter() {
    this.readsFilter.Page = 0;
    this.getreadsList();
  }

  // formateDate(d){
  //   var date = new Date(d);
  //   return date.getDate() + "/" +(date.getMonth() + 1)+ "/" +date.getFullYear() ; 
  // }

  pagination(page) {
    if (page == 'previous' && this.readsFilter.Page != 0) {
      this.readsFilter.Page = this.readsFilter.Page - 1;
      this.getreadsList();
    }
    else if (page == 'next' && this.dataSource.data.length == this.readsFilter.PageSize) {
      this.readsFilter.Page = this.readsFilter.Page + 1;
      this.getreadsList();
    }
  }
  // changeDate() {
  //   this.readsFilter.StartDate = undefined;
  //   this.readsFilter.EndDate = undefined;
  //   if (this.startDate != undefined)
  //     this.readsFilter.StartDate = new Date(new Date(this.startDate).setHours(0, 0, 0, 0)).toISOString().slice(0, 10);
  //   if (this.endDate != undefined)
  //     this.readsFilter.EndDate = new Date(new Date(this.endDate).setHours(24, 0, 0, 0)).toISOString().slice(0, 10);
  //   this.readsFilter.Page = 0;
  //   this.getreadsList();
  // }
}