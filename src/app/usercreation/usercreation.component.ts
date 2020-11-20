import { Component, OnInit } from '@angular/core';


interface Supervisor {
  value: string;
  viewValue: string;
}
interface UserRole {
  value: string;
  viewValue: string;
}
interface AutoSyncDay{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})


export class UsercreationComponent implements OnInit {

  selectedValue: string;
  AutoDeleteTime:number;

  supervisor: Supervisor[] = [
    {value: 'kumar-0', viewValue: '--select--'},
    {value: 'kumar-1', viewValue: 'kumar'},
    {value: 'kishore-2', viewValue: 'kishore'},
    {value: 'ram-3', viewValue: 'ram'}
  ];

  userRole: UserRole[] = [
    {value: 'Admin-0', viewValue: 'Admin'},
    {value: 'SuperAdmin-1', viewValue: 'SuperAdmin'},
    {value: 'Supervisor-2', viewValue: 'Supervisor'}
  ];
  autoSyncDay: AutoSyncDay[] = [
    {value: 'Admin-0', viewValue: 'Admin'},
    {value: 'SuperAdmin-1', viewValue: 'SuperAdmin'},
    {value: 'Supervisor-2', viewValue: 'Supervisor'}
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
