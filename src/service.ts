import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable()
export class AutoSyncService {
  private readonly oauthheaders;
  constructor(private http: HttpClient, private oauthService: OAuthService) {
    this.oauthheaders = new HttpHeaders({
      "user-key": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiUm9sZUlkIjoiMSIsIm5iZiI6MTYwNTYxNjIxNSwiZXhwIjoxNjA1NjE2NTE1LCJpc3MiOiJBdXRvU3luY1Rva2VuU2VydmVyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo2MzgvIn0.iIwrs0DuFT41N1PKhUnTwWhS1IMsjgmniCNtav_FWBQ'
    });
  }
  
  Login(model:any) {
    return this.http.post<any>(environment.apiBaseURL + '/User/login',model) 
  }

  GetUserList() {
    return this.http.get<any>(environment.apiBaseURL + '/User/GetAll',{
      headers: this.oauthheaders
    }); 
  }

  GetTransferHistoryList() {
    return this.http.get<any>(environment.apiBaseURL + '/Transfer/History',{
      headers: this.oauthheaders
    }); 
  }
}
