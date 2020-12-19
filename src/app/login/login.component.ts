import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AutoSyncService } from './../../service';
import { AuthService } from '../services/authservice.service';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutoSyncService]
})
export class LoginComponent implements OnInit {
  constructor(public route: Router, private service: AutoSyncService, public authService: AuthService) { }
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  isValid = true;

  email = new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]);
  password = new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(3)]);

  ngOnInit() {
    this.authService.logout();
  }

  onSubmit(form: NgForm) {
    var self = this;
    if (form.valid) {
      this.loading = true;
      let object = { Username: this.email.value, Password: this.password.value }
      this.service.Login(object)
        .subscribe((result) => {
          this.authService.setToken(result.headers.get('user-key'));
          self.loading = false;
          self.route.navigate(["/dashboard"]);
        },
          (err) => { self.isValid = false; self.loading = false },
          () => { self.loading = false });
    }
    else
      this.isValid = false;
  }
}