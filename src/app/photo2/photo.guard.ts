import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../service/auth.service'

@Injectable()
export class PhotoGuard implements CanActivate {
  constructor(private authSerivce: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const accout = JSON.parse(sessionStorage.getItem('login-user'));
    if (!this.authSerivce.isLoggedIn(accout)) {
      alert('Please Login First');
      this.router.navigate(['/signin'])
      return false;
    }
    if (!this.authSerivce.hasRole(accout, 'admin')) {
      this.router.navigate(['/notAllowedPage'])
      return false;
    }
    return true;
  }
}
