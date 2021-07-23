import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { ResponseModel, UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  myUser: any;
  errors: any;
  constructor(
    private authService: SocialAuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.userData$
      .pipe(
        map((user: SocialUser | ResponseModel) => {
          if (user instanceof SocialUser || user.type === 'social') {
            return {
              ...user,
              email: 'test@test.com',
            };
          } else {
            // console.log(user);
            return user;
          }
        })
      )
      .subscribe(
        (data: ResponseModel | SocialUser) => {
          this.myUser = data;
        },
        (err) => {
          this.errors = err;
        }
      );
  }
  getUserPhoto() {
    return this.myUser?.photoUrl;
  }
  getUserName() {
    if (this.myUser?.name) {
      return this.myUser?.name;
    } else {
      return [this.myUser?.nom + ' ' + this.myUser?.prenom];
    }
  }

  logout() {
    this.userService.logout();
  }
}
