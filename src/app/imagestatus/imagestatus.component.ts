import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-imagestatus',
  templateUrl: './imagestatus.component.html',
  styleUrls: ['./imagestatus.component.css']
})
export class ImagestatusComponent implements OnInit {

  dataSourceTwo: MatTableDataSource<PeriodicElement>;
  displayedColumnsTwo: string[] = ['sno', 'filename', 'size','status' ];
  @ViewChild('TableTwoPaginator', {static: true}) tableTwoPaginator: MatPaginator;
  @ViewChild('TableTwoSort', {static: true}) tableTwoSort: MatSort;

  dataSourceOne: MatTableDataSource<PeriodicElement>;
  displayedColumnsOne: string[] = ['sno', 'filename', 'size','status'];
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;


  constructor() {
    this.dataSourceOne = new MatTableDataSource;

    this.dataSourceTwo = new MatTableDataSource;
  }

  ngOnInit() {
    this.dataSourceOne.data = ELEMENT_DATA;
    this.dataSourceOne.paginator = this.tableOnePaginator;
    this.dataSourceOne.sort = this.tableOneSort;

    this.dataSourceTwo.data = ELEMENT_DATA;
    this.dataSourceTwo.paginator = this.tableTwoPaginator;
    this.dataSourceTwo.sort = this.tableTwoSort;
  }

  applyFilterOne(filterValue: string) {
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }
  applyFilterTwo(filterValue: string) {
    this.dataSourceTwo.filter = filterValue.trim().toLowerCase();
  }

}

interface PeriodicElement {
  sno: string;
  filename: string;
  size: string;
  status:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sno: '1', filename: 'Image1', size:'2MB',status:'completed'},
  {sno: '2', filename: 'Image2', size:'2MB',status:'completed'},
  {sno: '3', filename: 'Image3', size:'2MB',status:'completed'},
  {sno: '4', filename: 'Image4', size:'2MB',status:'completed'},
  {sno: '5', filename: 'Image5', size:'2MB',status:'completed'},
];





  

  