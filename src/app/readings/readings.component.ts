import { AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { ReadsModel } from './modal';
import { AutoSyncService } from '../../service';
import { FormControl } from '@angular/forms';
import { ToastService } from 'ng-uikit-pro-standard';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
