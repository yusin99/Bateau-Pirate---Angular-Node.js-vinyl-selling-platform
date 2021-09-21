import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaptchaService {
  private readonly API_KEY = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}

  sendToken(token: any) {
    return this.http.post<any>(`${this.API_KEY}captcha/token_validate`, {
      recaptcha: token,
    });
  }
}
