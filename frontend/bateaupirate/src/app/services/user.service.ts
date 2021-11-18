import { Injectable } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  FacebookLoginProvider,
} from 'angularx-social-login';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SingleUserModel, UserModelServer } from './../models/user.model';
import { catchError } from 'rxjs/operators';
import { ProductModelServer } from '../models/product.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  auth = false;
  role!: number;
  error: any;
  private readonly API_KEY = environment.api_key;
  user: any = {};
  authState$ = new BehaviorSubject<boolean>(this.auth);
  userData$ = new BehaviorSubject<any>(this.user);

  constructor(
    private authService: SocialAuthService,
    private httpClient: HttpClient,
    private Router: Router
  ) {
    authService.authState.subscribe((user: SocialUser) => {
      console.log(user);
      if (user != null) {
        this.auth = true;
        this.authState$.next(this.auth);
      }
    });
    console.log(this.error);
  }

  //  Login User with Email and Password
  loginUser(email: string, mdp: string) {
    // console.log('sada');
    return this.httpClient
      .post(`${this.API_KEY}/auth/login`, { email, mdp })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.userData$.next(data);
          if (data.role === 777) {
            this.role = 777;
          } else {
            this.role === 555;
          }
          window.localStorage.setItem('user', JSON.stringify(data));
          window.localStorage.setItem('token', JSON.stringify(data.token));

          if (window.localStorage.getItem('user')) {
            this.auth = true;
          } else {
            this.auth = false;
          }
          console.log(data);
          // this.auth = data.auth;
          this.authState$.next(true);
          this.userData$.next(data);
        },
        (err) => {
          // console.log(err.error.message);
          console.log(err);
          this.error = err.error.message;
          return this.error;
        }
      );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  registerUser(
    email: string,
    mdp: string,
    pseudo: string,
    nom: string,
    prenom: string,
    photoUrl: string
  ): Observable<any> {
    return this.httpClient
      .post<any>(`${this.API_KEY}/auth/register`, {
        email,
        mdp,
        pseudo,
        nom,
        prenom,
        photoUrl,
      })
      .pipe(catchError(this.errorHandler));
  }

  //  Google Authentication
  googleLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  facebookLogin(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logout() {
    this.auth = false;
    this.authState$.next(this.auth);
    this.authService.signOut();
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.Router.navigate(['/login']);
  }
  // API_KEY = 'http://localhost:3000/api';
  getAllUsers() {
    return this.httpClient.get(this.API_KEY + '/users');
  }
  getSingleUser(idClient: number): Observable<SingleUserModel> {
    return this.httpClient.get<SingleUserModel>(
      this.API_KEY + '/users/' + idClient
    );
  }
  deleteSingleUser(idClient: number): Observable<UserModelServer> {
    return this.httpClient.delete<UserModelServer>(
      this.API_KEY + '/users/' + idClient
    );
  }
  deleteSingleVinyl(idVinyl: number): Observable<ProductModelServer> {
    return this.httpClient.delete<ProductModelServer>(
      this.API_KEY + '/products/delete/' + idVinyl
    );
  }
  updateSingleUser(idClient: number, body: any): Observable<any> {
    return this.httpClient
      .put<any>(this.API_KEY + '/users/updateUser/' + idClient, body)
      .pipe(catchError(this.errorHandler));
  }
}

export interface ResponseModel {
  type: string;
  token: string;
  auth: boolean;
  email: string;
  nom: string;
  pseudo: string;
  prenom: string;
  photoUrl: string;
  idClient: number;
}
