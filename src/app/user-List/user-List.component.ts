import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { viewValues } from './modal';
import { AutoSyncService } from '../../service';


@Component({
  selector: 'app-user-List',
  templateUrl: './user-List.component.html',
  styleUrls: ['./user-List.component.css'],
  providers: [AutoSyncService]
})
export class UserListComponent implements OnInit {
  constructor(public route:Router,private service: AutoSyncService){}
  displayedColumns: string[] = ['sno','username','password','jobid','supervisor','folderpath','deviceid','action'];
  dataSource = new MatTableDataSource<viewValues>();  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 ngOnInit():void {
   var self = this;
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.service.GetUserList()
      .subscribe((result) => { 
        self.dataSource= result.data;
      },
      (err) => {},
      () => { });
 }
}

  

