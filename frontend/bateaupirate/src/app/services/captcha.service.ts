import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private readonly API_KEY = environment.api_key;
  constructor(private http: HttpClient) {}

  sendToken(token: any) {
    return this.http.post<any>(`${this.API_KEY}captcha/token_validate`, {
      recaptcha: token,
    });
  }
}
