import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router,ActivatedRoute } from '@angular/router';
import { AutoSyncService } from '../../service';

@Component({
  selector: 'app-imagestatus',
  templateUrl: './imagestatus.component.html',
  styleUrls: ['./imagestatus.component.css'],
  providers:[AutoSyncService]
})
export class ImagestatusComponent implements OnInit {
  dataSourceOne: MatTableDataSource<PeriodicElement>;
  displayedColumnsOne: string[] = ['sno', 'filename', 'size','status'];
  imageCount : Number;
  readCount: number;
  billCount:number;
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;


  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService) {
    this.dataSourceOne = new MatTableDataSource;
  }

  ngOnInit() {
    var self = this;
    this.route.paramMap.subscribe(params => {
      if (params.get('Id')) {
        this.service.GetTransferHistoryDetails(params.get('Id'))
        .subscribe((result) => {
          this.dataSourceOne.data = result.Data;
          this.readCount =  result.Data.filter(x => x.FileName.toLowerCase().includes('reads')).length;
          this.imageCount =  result.Data.filter(x => x.FileName.toLowerCase().includes('.jpg')).length;
          this.billCount =  result.Data.filter(x => x.FileName.toLowerCase().includes('bills')).length;
        },
   (err) => {},
   () => { });
      }});
    this.dataSourceOne.paginator = this.tableOnePaginator;
    this.dataSourceOne.sort = this.tableOneSort;

  }
  applyFilterOne(filterValue: string) {
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }

}

interface PeriodicElement {
  sno: string;
  filename: string;
  size: string;
  status:string;
  
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {sno: '1', filename: 'Image1', size:'2MB',status:'completed'},
//   {sno: '2', filename: 'Image2', size:'2MB',status:'completed'},
//   {sno: '3', filename: 'Image3', size:'2MB',status:'completed'},
//   {sno: '4', filename: 'Image4', size:'2MB',status:'completed'},
//   {sno: '5', filename: 'Image5', size:'2MB',status:'completed'},
// ];





  

  