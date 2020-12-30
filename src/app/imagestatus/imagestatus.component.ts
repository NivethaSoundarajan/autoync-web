import {OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router,ActivatedRoute } from '@angular/router';
import { AutoSyncService } from '../../service';
import { transHistory } from './modal';

@Component({
  selector: 'app-imagestatus',
  templateUrl: './imagestatus.component.html',
  styleUrls: ['./imagestatus.component.css'],
  providers:[AutoSyncService]
})
export class ImagestatusComponent implements OnInit {
  dataSourceOne: MatTableDataSource<transHistory>;
  displayedColumnsOne: string[] = ['sno', 'FileName', 'FileSize','Status'];
  transferId:String;
  imageCount : Number;
  readCount: number;
  billCount:number;
  isLoading: boolean = true;
  ispageLoading: boolean = false;
  reason:string;
  isStopped:boolean = false;
 
  @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;


  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService) {
    this.dataSourceOne = new MatTableDataSource;
  }

  ngOnInit() {
    var self = this;
    this.ispageLoading = true;
    this.route.paramMap.subscribe(params => {
      if (params.get('Id')) {
        this.service.GetTransferHistoryDetails(params.get('Id'))
        .subscribe((result) => {
          self.isStopped = (result.Data.JobDetails.length == 0) ? true : (result.Data.JobDetails[0].Status == 'Stopped') ? true : false; 
          self.reason = result.Data.Reason;
          this.dataSourceOne.data = result.Data.JobDetails;
          
          this.transferId= result.Data.JobId;
          this.readCount =  result.Data.JobDetails.filter(x => x.FileName.toLowerCase().includes('reads')).length;
          this.imageCount =  result.Data.JobDetails.filter(x => x.FileName.toLowerCase().includes('.jpg')).length;
          this.billCount =  result.Data.JobDetails.filter(x => x.FileName.toLowerCase().includes('bills')).length;
          self.isLoading = false;
          self.ispageLoading = false;
        },
       
   (err) => {
    self.isLoading = false;
    self.ispageLoading = false;
   },
   () => { });
      }});
    this.dataSourceOne.paginator = this.tableOnePaginator;
    this.dataSourceOne.sort = this.tableOneSort;

  }
  applyFilterOne(filterValue: string) {
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }

}








  

  