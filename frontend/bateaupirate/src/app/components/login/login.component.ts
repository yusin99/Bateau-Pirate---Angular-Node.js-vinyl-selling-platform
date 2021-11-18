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
  error_message: any;
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
  async login(form: NgForm) {
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
  }
}
