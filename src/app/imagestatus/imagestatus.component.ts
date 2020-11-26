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
  dataSourceOne: MatTableDataSource<transHistory>;
  displayedColumnsOne: string[] = ['sno', 'FileName', 'FileSize','Status'];
  trnasferId:String;
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
          this.dataSourceOne.data = result.Data.JobDetails;
          this.trnasferId= result.Data.JobId;
          this.readCount =  result.Data.JobDetails.filter(x => x.FileName.toLowerCase().includes('reads')).length;
          this.imageCount =  result.Data.JobDetails.filter(x => x.FileName.toLowerCase().includes('.jpg')).length;
          this.billCount =  result.Data.JobDetails.filter(x => x.FileName.toLowerCase().includes('bills')).length;
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

interface transHistory {
  sno: string;
  FileName: string;
  FileSize: string;
  Status:string;
  
}







  

  