import {AfterViewInit, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { userCreation } from './../usercreation/modal';
import { AutoSyncService } from '../../service';
import * as XLSX from 'xlsx';
import {ToastService} from 'ng-uikit-pro-standard';
import { ConfirmDialogModel, ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-user-List',
  templateUrl: './user-List.component.html',
  styleUrls: ['./user-List.component.css'],
  providers: [AutoSyncService]
})
export class UserListComponent implements OnInit {
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public route:Router,private service: AutoSyncService,private toast: ToastService,public dialog: MatDialog){}
  displayedColumns: string[] = ['sno','username','name','RoleName','SupervisorName','FolderFilePath','Deviceid','IsActive','action'];
  selectDataSource = new MatTableDataSource<userCreation>();
  dataSource = new MatTableDataSource<userCreation>();
  roleList:any;
  roleId:number;
  isLoading:boolean=false;
  disabled:boolean=false;
  @ViewChild('TABLE') table: ElementRef;
  


 ngOnInit():void {
   var self = this;
   this.isLoading=true;
   this.getMasterData();
    this.service.GetUserList()
        .subscribe((result) => { 
          if(result != null)
            self.dataSource.data= self.selectDataSource.data= result.Data;
            self.isLoading=false;
        },
        (err) => {
          self.isLoading=false;
          self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
        },
        () => { });
      this.selectDataSource.paginator = this.tableOnePaginator;
      this.selectDataSource.sort = this.tableOneSort;
 }
      
 changeActiveStatus(data){
  var self = this;
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: "27%",
    data: new ConfirmDialogModel("", `Are you Sure to ${data.IsActive ? 'DeActive' : 'Active'}  this?`)
  });
   dialogRef.afterClosed().subscribe(dialogResult => {
     if(dialogResult){
         data.IsActive = !data.IsActive;
        this.service.SaveUser(data)
        .subscribe((result) => { 
          self.toast.success(((data.IsActive) ? 'Activated' : 'DeActivated' )+ '   Successfully..!!','Success!', { opacity: 1 });
        },
        (err) => {
          self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
        },
        () => { });
     }
});
  
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
   /* table id is passed over here */   
   let data = [];
   var id = 1;
   this.selectDataSource.data.forEach(function(x){
      data.push({'S NO' : id,'User ID' : x.Username,'Name':x.Name,'Job Title':x.RoleName,'Supervisor':x.SupervisorName,'Folder Path':x.FolderFilePath,'Device ID':x.DeviceId,'Status':(x.IsActive) ? 'Active': 'In Active'})
      id++;
    });
    const ws: XLSX.WorkSheet=XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'UserList_'+new Date()+'.xlsx');
 }

 applyFilterOne(filterValue: string) {
  this.selectDataSource.filter = filterValue.trim().toLowerCase();
 }
 
 roleChange(){
    this.selectDataSource.data = (this.roleId == 0)? this.dataSource.data : this.dataSource.data.filter(x => (x.RoleId == this.roleId));
 }
 disable(){
  this.disabled = true
}


 confirmDialog(): void {
 
  
}
}