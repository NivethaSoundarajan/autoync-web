import {AfterViewInit, Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ActivatedRoute,Router } from '@angular/router';
import { ReadsModel}from '../../app/readings/modal';
import {AutoSyncService} from 'src/service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})

export class ReadingsComponent implements OnInit {
  selectDataSource: MatTableDataSource<ReadsModel>;
  // isLoading: boolean = true;
  // ispageLoading: boolean = false;
  // @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
  displayedColumns: string[] = ['JobId','AccountId','AccountType','ReadingDate','ReadingUnit','HasImage','ImageName','ReadingType','Reason','Remarks','ReadFlag','IsApproved'];
    constructor(private router: Router, private route: ActivatedRoute, private service: AutoSyncService) { 
  
  }
  ngOnInit() {
    var self = this;
    // this.ispageLoading = true;
    this.service.GetReads() 
    .subscribe((result) => {
      
      debugger;
    },
      (err) => {
        debugger;
      },
      () => { });
    
  }

  
}
