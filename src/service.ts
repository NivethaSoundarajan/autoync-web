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
      "user-key" : environment.authKey
    });
  }
  
  Login(model:any) {
    return this.http.post<any>(environment.apiBaseURL + '/User/login',model, {observe: 'response'}) 
  }

  GetUserList() {
    return this.http.post<any>(environment.apiBaseURL + '/User/GetAll',null,{
      headers: this.headers
    }); 
  }

  SaveUser(user) {
    return this.http.post<any>(environment.apiBaseURL + '/User/AddOrUpdate',user,{
      headers: this.headers
    }); 
  }

  getMasterData(){
    return this.http.post<any>(environment.apiBaseURL + '/Dropdown/GetData',null,{
      headers: this.headers
    }); 
  }


  GetTransferHistoryList() {
    return this.http.post<any>(environment.apiBaseURL + '/Transfer/History',null,{
      headers: this.headers
    }); 
  }

  GetTransferHistoryDetails(id:string) {
    return this.http.post<any>(environment.apiBaseURL + '/Transfer/Detail?jobId='+id,null,{
      headers: this.headers
    }); 
  }
}
