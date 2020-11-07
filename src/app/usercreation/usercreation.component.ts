import { Component, OnInit } from '@angular/core';

interface Supervisor {
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

  supervisor: Supervisor[] = [
    {value: 'kumar-0', viewValue: 'kumar'},
    {value: 'kishore-1', viewValue: 'kishore'},
    {value: 'ram-2', viewValue: 'ram'}
  ];

 
  constructor() { }

  ngOnInit(): void {
  }

}
