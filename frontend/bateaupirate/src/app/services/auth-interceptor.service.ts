import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from './product.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private userService: UserService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Interception In Progress'); // Interception Stage
    let idToken;
    if (window.localStorage.getItem('token')) {
      idToken = JSON.parse(window.localStorage.getItem('token') || ''); // This retrieves a token from local storage
    }
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + idToken),
    }); // This clones HttpRequest and Authorization header with Bearer token added
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    // console.log(req);
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.statusText === 'Forbidden') {
          this.userService.error === 'Session Expired. Please log in again.';
          this.userService.logout();
          this.userService.auth = false;
        }
        // Catching Error Stage
        if (error && error.status === 401) {
          console.log('ERROR 401 UNAUTHORIZED'); // in case of an error response the error message is displayed
        }
        const err = error.error.message || error.statusText;
        return throwError(error); // any further errors are returned to frontend
      })
    );
  }
}
