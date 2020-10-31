import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements AfterViewInit {

  displayedColumns: string[] = ['sno', 'name','accountnumber','meterreading','latlog','image', 'status','action'];
  dataSource = new MatTableDataSource<reading>(readingvalues);  

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 }
}

export interface reading {
 sno: number;
 name:string;
 accountnumber:string;
 meterreading:string;
 latlog:string;
 image:String;
 status:string;
 action:string;
}

const readingvalues: reading[] = [
 {sno: 1 ,name:'Kumar',accountnumber:'12',meterreading:'258',latlog:'+2555',image:'Image 1',status:'Completed',action:'view'},
 {sno: 2 ,name:'Kumar',accountnumber:'12',meterreading:'258',latlog:'+2555',image:'Image 1',status:'Completed',action:'view'}

];
  