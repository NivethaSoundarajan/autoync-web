import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  loginForm: FormGroup;
  submitted = false;
  loading = false;

  // constructor(
  //   private authenticationService: AuthenticationService) 

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

     getErrorMessage() {
      if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'Enter password';
    }
    
    return this.email.hasError('email') ? 'Not a valid email' : '';
  } 
    
  }
//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     this.authenticationService.login(this.username.value, this.password.value)
//         .pipe(first())
//         .subscribe(
//             data => {
//                 this.router.navigate([this.returnUrl]);
//             },
//             error => {
//                 this.error = error;
//                 this.loading = false;
//             });
// }

    