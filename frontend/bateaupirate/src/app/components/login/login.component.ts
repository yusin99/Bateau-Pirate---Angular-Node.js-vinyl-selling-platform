import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: string;
  mdp!: string;
  error: any;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.authState$.subscribe(
      (authState) => {
        if (authState) {
          this.router.navigateByUrl(
            this.route.snapshot.queryParams['returnUrl'] || '/profile'
          );
        } else {
          this.router.navigateByUrl('/login');
        }
      },
      (err) => {
        return (this.error = err);
      }
    );
  }

  signInWithGoogle(): void {
    this.userService.googleLogin();
  }
  getError() {
    return this.error;
  }

  login(form: NgForm) {
    const email = this.email;
    const mdp = this.mdp;

    if (form.invalid) {
      return;
    }

    form.reset();
    this.userService.loginUser(email, mdp);
  }
}
