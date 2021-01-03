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
  isLoading: boolean = false;
  ispageLoading: boolean = false;
  page: number = 0;
  readsFilter = new readsFilter();
  displayedColumns: string[] = ['JobId','AccountId','AccountType','ReadingDate','ReadingUnit','HasImage','ImageName','ReadingType','Reason','Remarks','ReadFlag','IsApproved'];
    constructor(private router: Router, private route: ActivatedRoute, private service: AutoSyncService) { 
      this.dataSource = new MatTableDataSource;
    }
  ngOnInit() {
    var self = this;
    this.ispageLoading = true;
    this.service.GetReads(this.readsFilter) 
    .subscribe((result) => {
      if (result != null && result.Status) {
        debugger;
        self.dataSource.data = result.Data;
        self.isLoading = false;
        self.ispageLoading = false;
      }
    },
      (err) => {
        self.isLoading = false;
      },
      () => { });
    
  }
  pagination(page) {
    if (page == 'previous' && this.readsFilter.Page != 0) {
      this.readsFilter.Page = this.readsFilter.Page - 1;
      // this.getTransferHistoryList();
    }
    else if (page == 'next' && this.dataSource.data.length == this.readsFilter.PageSize) {
      this.readsFilter.Page = this.readsFilter.Page + 1;
      // this.getTransferHistoryList();
    }
  }
  
}
