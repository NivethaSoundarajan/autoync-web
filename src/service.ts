import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environment';
import { AuthService } from './app/services/authservice.service';
import { transHistoryFilter } from './../src/app/transferstatus/modal';

@Injectable()
export class AutoSyncService {
  private readonly headers;
  constructor(private http: HttpClient, public authService : AuthService) {
    this.headers = new HttpHeaders({
      "user-key" : this.authService.getToken()
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


  GetTransferHistoryList(model:transHistoryFilter) {
    return this.http.post<any>(environment.apiBaseURL + '/Transfer/History',model,{
      headers: this.headers
    }); 
  }

  GetTransferHistoryDetails(id:string) {
    return this.http.post<any>(environment.apiBaseURL + '/Transfer/Detail?jobId='+id,null,{
      headers: this.headers
    }); 
  }

  GetUserDetails(id:Number) {
    return this.http.post<any>(environment.apiBaseURL + '/User/GetUser?userId='+id,null,{
      headers: this.headers
    }); 
  }

  GetReads() {
    return this.http.post<any>(environment.apiBaseURL + '/Read/GetReads',null,{
      headers: this.headers
    });
  }
}
