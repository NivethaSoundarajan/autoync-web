import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable()
export class AutoSyncService {
  private readonly headers;
  constructor(private http: HttpClient, private oauthService: OAuthService) {
    this.headers = new HttpHeaders({
      "user-key": environment.authKey
    });
  }
  
  Login(model:any) {
    return this.http.post<any>(environment.apiBaseURL + '/User/login',model, {observe: 'response'}) 
  }

  GetUserList() {
    return this.http.post<any>(environment.apiBaseURL + '/User/GetAll',{
      headers: this.headers
    }); 
  }

  saveuser(user) {
    return this.http.get<any>(environment.apiBaseURL + '/User/GetAll',{
      headers: this.headers
    }); 
  }


  GetTransferHistoryList() {
    return this.http.post<any>(environment.apiBaseURL + '/Transfer/History',{
      headers: this.headers
    }); 
  }
}
