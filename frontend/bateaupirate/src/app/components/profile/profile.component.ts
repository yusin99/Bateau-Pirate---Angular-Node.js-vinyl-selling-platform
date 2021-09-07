import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { ResponseModel, UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { map, windowCount } from 'rxjs/operators';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  myUser: any;
  orders: any;
  errors: any;
  id: any;
  dataLoggedUser: any;
  totalLength: number | undefined;
  page = 1;
  constructor(
    private authService: SocialAuthService,
    private userService: UserService,
    private orderService: OrderService,
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
          // window.localStorage.setItem('user', JSON.stringify(this.myUser));
        },
        (err) => {
          this.errors = err;
        }
      );
    if (!window.localStorage.getItem('user')) {
      window.localStorage.setItem('user', JSON.stringify(this.myUser));
    }
    this.myUser = JSON.parse(window.localStorage.getItem('user') || '');
    // }
    // console.log(this.myUser);
    this.orderService
      .getOrderByClientId(this.myUser.idClient)
      .then((orders) => {
        this.totalLength = orders.length;
        this.orders = orders;
        console.log(this.orders);
      });
  }
  getUserPhoto() {
    return this.myUser.photoUrl;
  }
  getUserEmail() {
    return this.myUser.email;
  }
  getUserName() {
    if (this.myUser.name) {
      // console.log(this.myUser);
      return [this.myUser.name];
    } else {
      return [this.myUser.prenom + ' ' + this.myUser.nom];
    }
  }
  getProvider() {
    if (this.myUser.provider) {
      return this.myUser.provider;
    } else {
      return 'Bateau Pirate account';
    }
  }
  navigateUpdate(idClient: number) {
    idClient = this.myUser.idClient;
    this.router.navigate(['/updateUser/', idClient]);
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
