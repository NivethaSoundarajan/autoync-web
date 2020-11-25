import {AfterViewInit, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { viewValues } from './modal';
import { AutoSyncService } from '../../service';
import * as XLSX from 'xlsx';
import {ToastService} from 'ng-uikit-pro-standard'

@Component({
  selector: 'app-user-List',
  templateUrl: './user-List.component.html',
  styleUrls: ['./user-List.component.css'],
  providers: [AutoSyncService]
})
export class UserListComponent implements OnInit {
  constructor(public route:Router,private service: AutoSyncService,private toast: ToastService){}
  displayedColumns: string[] = ['sno','username','name','RoleName','SupervisorName','FolderFilePath','Deviceid','Status','action'];
  dataSource = new MatTableDataSource<viewValues>();  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('TABLE') table: ElementRef;

 ngOnInit():void {
   var self = this;
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.service.GetUserList()
      .subscribe((result) => { 
        self.dataSource= result.Data;
      },
      (err) => {
        this.toast.error('Error!', 'Something Went Wrong!', { opacity: 1 });
      },
      () => { });
 }

 deleteUser(data){
   data.IsActive = false;
  this.service.SaveUser(data)
      .subscribe((result) => { 
        this.toast.success('Success!', 'Deleted Successfully!', { opacity: 1 });
      },
      (err) => {
        this.toast.error('Error!', 'Something Went Wrong!', { opacity: 1 });
      },
      () => { });
 }
 exportAsExcel()
 {
   const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
   ws['!cols'][7] = { hidden: true };
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   /* save to file */
   XLSX.writeFile(wb, 'UserList_'+new Date()+'.xlsx');

 }
}

  

