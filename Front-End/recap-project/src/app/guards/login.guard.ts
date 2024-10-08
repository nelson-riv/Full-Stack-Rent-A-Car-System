import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard  {

  constructor(private authService:AuthService,
              private toastrService:ToastrService,
              private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot)
              : Observable<boolean | UrlTree>
              | Promise<boolean | UrlTree>
              | boolean | UrlTree {

      if(this.authService.isAuthenticated()) {
        return true;
      }
      else {
        this.router.navigate(["login"])
        this.toastrService.info("You must be login to system.")
        return false;
      }

  }

}
