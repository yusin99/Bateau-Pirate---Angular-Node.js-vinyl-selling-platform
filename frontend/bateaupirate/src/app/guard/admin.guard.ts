import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      // JSON.parse(window.localStorage.getItem('user') || '').pseudo ===
      //   'admin' &&
      JSON.parse(window.localStorage.getItem('user') || '').role === 777
      // this.userService.role === 777
    ) {
      console.log(JSON.parse(window.localStorage.getItem('user') || '').role);
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
