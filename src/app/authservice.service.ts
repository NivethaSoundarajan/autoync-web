import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();
  constructor(private route: Router) { }

  setToken(token:string){
    localStorage.setItem("token",token);

  }

  getToken(){
    return localStorage.getItem("token");
  }
}
