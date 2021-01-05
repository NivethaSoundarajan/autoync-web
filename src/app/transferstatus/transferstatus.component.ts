import { AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { transHistory, transHistoryFilter } from './modal';
import { AutoSyncService } from '../../service';
import { FormControl } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-transferstatus',
  templateUrl: './transferstatus.component.html',
  styleUrls: ['./transferstatus.component.css'],
  providers: [AutoSyncService]
})
export class TransferstatusComponent implements OnInit {
  selectedDataSource: MatTableDataSource<transHistory>;
  transHistoryFilter = new transHistoryFilter();
  displayedColumns: string[] = ['Sno', 'CreatedDate', 'SyncType', 'JobUniqueId', 'Username', 'SupervisorName', 'TotalFileSize', 'SourceFilePath', 'Photo', 'Excel', 'Status', 'action'];
  startDate;
  endDate;
  page: number;
  isLoading: boolean = true;
  ispageLoading: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: AutoSyncService) {
    this.selectedDataSource = new MatTableDataSource;
  }
  ngOnInit() {
    this.getTransferHistoryList();
  } 

  getTransferHistoryList() {
    var self = this;
    this.ispageLoading = true;
    this.service.GetTransferHistoryList(this.transHistoryFilter)
      .subscribe((result) => {
        if (result != null && result.Status) {
          self.selectedDataSource.data = result.Data;
          self.page = self.transHistoryFilter.Page;
        }
        self.isLoading = false;
        self.ispageLoading = false;
      },
        (err) => {
          self.isLoading = false;
          self.ispageLoading = false;
        },
        () => { });
  }

  applyFilter() {
    this.transHistoryFilter.Page = 0;
    this.getTransferHistoryList();
  }

  exportAsExcel() {
    /* table id is passed over here */
    let data = [];
    var id = 1;
    var self = this;
    this.selectedDataSource.data.forEach(function (x) {
      var da = self.formateDate(x.CreatedDate);
      data.push({ 'sno': id, 'Date': da, 'Sync Type': x.SyncType, 'Transfer Id': x.JobUniqueId, 'User Name': x.Username, 'Supervisor': x.SupervisorName, 'Size': x.TotalFileSize, 'SourceFilePath': x.SourceFilePath, 'Photo': (x.Photos != null) ? x.Photos.Total + '/' + x.Photos.Completed : '0 / 0', 'Excel': (x.Excel != null) ? x.Excel.Total + '/' + x.Excel.Completed : '0 / 0', 'Status': x.Status })
      id++;
    });
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'TransferHistory' + new Date() + '.xlsx');
  }

  formateDate(d){
    var date = new Date(d);
    return date.getDate() + "/" +(date.getMonth() + 1)+ "/" +date.getFullYear() ; 
  }

  pagination(page) {
    if (page == 'previous' && this.transHistoryFilter.Page != 0) {
      this.transHistoryFilter.Page = this.transHistoryFilter.Page - 1;
      this.getTransferHistoryList();
    }
    else if (page == 'next' && this.selectedDataSource.data.length == this.transHistoryFilter.PageSize) {
      this.transHistoryFilter.Page = this.transHistoryFilter.Page + 1;
      this.getTransferHistoryList();
    }
  }

  changeDate() {
    this.transHistoryFilter.StartDate = undefined;
    this.transHistoryFilter.EndDate = undefined;
    if (this.startDate != undefined)
      this.transHistoryFilter.StartDate = new Date(new Date(this.startDate).setHours(0, 0, 0, 0)).toISOString().slice(0, 10);
    if (this.endDate != undefined)
      this.transHistoryFilter.EndDate = new Date(new Date(this.endDate).setHours(24, 0, 0, 0)).toISOString().slice(0, 10);
    this.transHistoryFilter.Page = 0;
    this.getTransferHistoryList();
  }
}

