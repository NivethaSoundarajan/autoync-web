
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
  displayedColumns: string[] = ['Id', 'JobUniqueId','Username','SupervisorName','TotalFileSize','SourceFilePath','Photo','Excel','Status','action'];
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService) {
    this.dataSourceOne = new MatTableDataSource;
  }
  ngOnInit() {
   var self=this;
   this.service.GetTransferHistoryList()
   .subscribe((result) => {
     if(result != null && result.Status)
     this.dataSourceOne.data = result.Data;
   },
   (err) => {},
   () => { });
   this.dataSourceOne.paginator = this.tableOnePaginator;
   this.dataSourceOne.sort = this.tableOneSort;

 }
 applyFilterOne(filterValue: string) {
   this.dataSourceOne.filter = filterValue.trim().toLowerCase();
 }

}
   
 
//  search(){
//   // this.selectedDataSource = this.dataSource.filter(x=>x.id.contains(this.searchText));
//  }

//  public doFilter = (value: string) => {
//   this.dataSource.filter = value.trim().toLocaleLowerCase();
// }



  
