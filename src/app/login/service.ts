import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable()
export class LoginService {
  private readonly oauthheaders;
  constructor(private http: HttpClient) {
  }

  Login(userName:String,password:String) {
    debugger;
    return this.http.post<any>(environment.apiBaseURL + '/User/login',{
        params:new HttpParams()
        .set('Username',userName.toString())
        .set('Password',password.toString())
        .set('DeviceId',"")
    }) 
  }
}
