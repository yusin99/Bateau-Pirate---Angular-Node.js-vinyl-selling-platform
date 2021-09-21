import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel, UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  role!: number;
  profile!: any;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (JSON.parse(window.localStorage.getItem('user') || '').role === 777) {
      return true;
    } else {
      console.log(this.userService.role);
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
  }
}
