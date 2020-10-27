import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private router: Router) { 
    debugger;
    this.username="";
    this.password="";
  }

  ngOnInit(): void {
  }
  
  onSubmit()
  {
    debugger;
    this.router.navigate(['/newuser'])
  }

  newUser(){

  }

}

