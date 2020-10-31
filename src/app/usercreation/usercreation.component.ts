import { Component, OnInit } from '@angular/core';

interface Food {
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

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  supervisorList: string[] = ['kumar', 'ashwini' ,'nivetha','kishore', 'satheesh', 'ram', 'arvindh'];

  
  constructor() { }

  ngOnInit(): void {
  }

}
