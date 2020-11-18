import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable()
export class UserListService {
  constructor(private http: HttpClient) {
  }

  GetUserList() {
    return this.http.get<any>(environment.apiBaseURL + '/User/login'); 
  }
}
