import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-accounthistory',
  templateUrl: './accounthistory.component.html',
  styleUrls: ['./accounthistory.component.css']
})
export class AccounthistoryComponent implements OnInit {

  meterno = new FormControl();

  meternoList: number[] = [1234,12345,7589,6565,4525];

  values = '';
  accountdetails= '';
  accountno='';
  meterno0 ='';
  meterreadingnumber='';
  supervisor ='';
  freq ='';
  customerinformation ='';
  customername='';
  address='';
  gpslat='';
  gpslong='';
  gpscode='';
  contact='';


constructor(){}
ngOnInit(): void {}
}