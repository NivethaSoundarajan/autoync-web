import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})
export class UsercreationComponent implements OnInit {

  supervisor = new FormControl();

  supervisorList: string[] = ['kumar', 'ashwini' ,'nivetha','kishore', 'satheesh', 'ram', 'arvindh'];

  
  constructor() { }

  ngOnInit(): void {
  }

}
