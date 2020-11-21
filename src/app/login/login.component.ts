import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AutoSyncService } from './../../service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutoSyncService]
})
export class LoginComponent  {
  constructor(public route:Router,private service: AutoSyncService){}
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  isValid = true;

  email = new FormControl('', [Validators.required, Validators.maxLength(20),Validators.minLength(10)]);
  password = new FormControl('', [Validators.required,Validators.maxLength(15),Validators.minLength(8)]);

  onSubmit(form : NgForm){
    var self= this;
    if(form.valid){
      let object ={Username:this.email.value,Password:this.password.value}
      this.service.Login(object)
      .subscribe((result) => { 
        environment.authKey = result.headers.get('user-key');
        this.route.navigate(["/dashboard"]);
      },
      (err) => {self.isValid = false; },
      () => { });
    }
    else
      this.isValid = false;
  }
}

    
