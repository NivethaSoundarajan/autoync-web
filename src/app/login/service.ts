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
    var model={UserName:userName,Password:password}
     return this.http.post<any>(environment.apiBaseURL + '/User/login',model)
  }
}
