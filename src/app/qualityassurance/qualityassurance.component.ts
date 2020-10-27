import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-qualityassurance',
  templateUrl: './qualityassurance.component.html',
  styleUrls: ['./qualityassurance.component.css']
})
export class QualityassuranceComponent implements AfterViewInit {

  displayedColumns: string[] = ['sno', 'transferid', 'deviceid', 'supervisor','accountnumber','meternumber','type','reading','geo','lat','log','reason','image','status','remarks','view'];
  dataSource = new MatTableDataSource<qualityassurance>(qualityvalues);  

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 }
}

export interface qualityassurance {
  sno: number;
 transferid: string;
 deviceid: string;
 supervisor: string;
 accountnumber:string;
 meternumber:string;
 type:string;
 reading:string;
 geo:number;
 lat:string;
 log:string;
 reason:string;
 image:string;
 status:string;
 remarks:string;
 view:string;


}

const qualityvalues: qualityassurance[] = [
 {sno:1, transferid:'20-10-2020', deviceid:'MT041', supervisor:'kumar',accountnumber:'236954',meternumber:'1456',type:'E',reading:'256',geo:2263,lat:'23.639',log:'26.698',reason:'actualreading',image:'pic.jpg',status:'manual entry',remarks:'Meter in',view:'abc'},
 ,

];
  
