import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { LoginService } from './service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent  {
  constructor(public route:Router,private service: LoginService){}
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  isValid = true;

  email = new FormControl('', [Validators.required, Validators.maxLength(20),Validators.minLength(10)]);
  password = new FormControl('', [Validators.required,Validators.maxLength(15),Validators.minLength(8)]);

  onSubmit(form : NgForm){
    var self= this;
    if(form.valid){
      this.service.Login(this.email.value,this.password.value)
      .subscribe((result) => { 
        debugger;
        this.route.navigate(["/dashboard"]);
      },
      (err) => {self.isValid = false; },
      () => { });
      this.route.navigate(["/dashboard"]);
    }
    else
      this.isValid = false;
  }
}

    
