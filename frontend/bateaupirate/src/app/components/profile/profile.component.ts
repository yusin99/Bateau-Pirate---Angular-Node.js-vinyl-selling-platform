import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { ResponseModel, UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { map, windowCount } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  myUser: any;
  errors: any;
  dataLoggedUser: any;
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
          window.localStorage.setItem('user', JSON.stringify(this.myUser));
        },
        (err) => {
          this.errors = err;
        }
      );
    // this.dataLoggedUser = JSON.parse(window.localStorage.getItem('user') || '');
    // console.log(this.dataLoggedUser);
    this.dataLoggedUser = JSON.parse(window.localStorage.getItem('user') || '');
  }
  getUserPhoto() {
    return this.dataLoggedUser.photoUrl;
  }
  getUserName() {
    if (this.dataLoggedUser.name) {
      // console.log(this.myUser);
      return [this.dataLoggedUser.name];
    } else {
      return [this.dataLoggedUser.prenom + ' ' + this.dataLoggedUser.nom];
    }
  }

  logout() {
    this.userService.logout();
  }
}
