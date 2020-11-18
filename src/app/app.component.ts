import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'newauto-sync';
  public isAuth: boolean = false;
  public isAuth1: boolean = true;

  constructor(public location:Location){}
  isLoginPage(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 2 );
    if(titlee =='login')
      return false;
    return true;
  }

  
} 
