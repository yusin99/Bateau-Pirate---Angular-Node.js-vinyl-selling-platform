import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CaptchaService } from 'src/app/services/captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  mdp!: string;
  error_message: any = this.getError();
  captcha_token: any;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private captcha: CaptchaService
  ) {}

  ngOnInit(): void {
    this.userService.authState$.subscribe(
      (authState) => {
        console.log(authState);
        this.userService.userData$.subscribe((data) => {
          if (authState) {
            this.router.navigateByUrl(
              this.route.snapshot.queryParams['returnUrl'] || '/'
            );
          } else {
            this.router.navigateByUrl('/login');
          }
        });
      },
      (err) => {
        return (this.error_message = err);
      }
    );
    // this.error_message = this.getError;
    // console.log(this.error_message);
  }

  isEmpty(obj: any) {
    return Object.keys(obj).length === 0;
  }

  signInWithGoogle(): void {
    this.userService.googleLogin();
  }
  signInWithFacebook(): void {
    this.userService.facebookLogin();
  }
  getError() {
    return this.error_message;
  }
  //function to resolve the reCaptcha and retrieve a token
  async resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
    this.captcha_token = captchaResponse;
    await this.sendTokenToBackend(captchaResponse); //declaring the token send function with a token parameter
  }

  //function to send the token to the node server
  sendTokenToBackend(tok: any) {
    //calling the service and passing the token to the service
    this.captcha.sendToken(tok).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  async login(form: NgForm) {
    await this.captcha_token;
    if (this.captcha_token) {
      const email = this.email;
      const mdp = this.mdp;
      if (form.invalid) {
        return;
      }
      form.reset();
      this.userService.loginUser(email, mdp);
      if (!this.userService.auth) {
        this.error_message = 'Username or password are incorrect';
      }
      this.userService.authState$.next(true);
    } else {
      this.error_message = 'Validez captcha';
    }
  }
}
