import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
// Custom
import { AuthService } from "../../services/authservice.service"
import {ToastService} from 'ng-uikit-pro-standard'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(
    private authSerive: AuthService,
    private toastr: ToastService, 
    private route: Router){}


  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      debugger;
      if(this.authSerive.isLoggednIn()) return true;
      else{
        this.route.navigate(["/login"]);
        this.toastr.error('Please Login to continue...!', 'Warning!', { opacity: 1 });
        return false;
      }
    }
}
