import {AfterViewInit, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { userCreation } from './../usercreation/modal';
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
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;
  constructor(public route:Router,private service: AutoSyncService,private toast: ToastService){}
  displayedColumns: string[] = ['sno','username','name','RoleName','SupervisorName','FolderFilePath','Deviceid','Status','action'];
  selectDataSource = new MatTableDataSource<userCreation>();
  dataSource = new MatTableDataSource<userCreation>();
  roleList:any;
  roleId:number;

  @ViewChild('TABLE') table: ElementRef;

 ngOnInit():void {
   var self = this;
   this.getMasterData();
    this.service.GetUserList()
        .subscribe((result) => { 
          self.dataSource.data= self.selectDataSource.data= result.Data;
        },
        (err) => {
           self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
        },
        () => { });
      this.selectDataSource.paginator = this.tableOnePaginator;
      this.selectDataSource.sort = this.tableOneSort;
 }
      
 deleteUser(data){
   var self = this;
   data.IsActive = false;
  this.service.SaveUser(data)
      .subscribe((result) => { 
        self.toast.success( 'Deleted Successfully!','Success!', { opacity: 1 });
      },
      (err) => {
         self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
      },
      () => { });
 }

 getMasterData(){
  var self =this;
  this.service.getMasterData()
    .subscribe((result) => { 
      self.roleList = result.Data.Roles;
      self.roleList[0].Value = 'All';
    },  
    (err) => {
       self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
    },
    () => { });
}

 exportAsExcel(){
   const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
   ws['!cols'][7] = { hidden: true };
   const wb: XLSX.WorkBook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   /* save to file */
   XLSX.writeFile(wb, 'UserList_'+new Date()+'.xlsx');

 }

 applyFilterOne(filterValue: string) {
  this.selectDataSource.filter = filterValue.trim().toLowerCase();
 }
 
 roleChange(){
    this.selectDataSource.data = (this.roleId == 0)? this.dataSource.data : this.dataSource.data.filter(x => (x.RoleId == this.roleId));
 }
}