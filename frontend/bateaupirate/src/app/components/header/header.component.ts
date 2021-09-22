import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesModel } from 'src/app/models/categories.model';
import { ProductService } from 'src/app/services/product.service';
import { CartModelServer } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartData!: CartModelServer;
  cartTotal!: number;
  authState!: any;
  email!: any;
  role!: number;
  username!: string;
  constructor(
    public cartService: CartService,
    public productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe((total) => (this.cartTotal = total));
    this.cartService.cartData$.subscribe((data) => (this.cartData = data));
    this.userService.authState$.subscribe((state) => {
      this.authState = state;
      console.log(state);
    });
    this.userService.userData$.subscribe((data) => {
      this.role = data.role;
      this.email = data.email;
      this.username = data.nom + ' ' + data.prenom;
      console.log(this.email);
    });
    if (window.localStorage.getItem('user')) {
      this.authState = true;
      this.email = JSON.parse(window.localStorage.getItem('user') || '').email;
      this.role = JSON.parse(window.localStorage.getItem('user') || '').role;
      this.username =
        JSON.parse(window.localStorage.getItem('user') || '').nom +
        ' ' +
        JSON.parse(window.localStorage.getItem('user') || '').prenom;
    } else {
      this.authState = false;
      this.role = 0;
    }
  }
  navigateAllProducts() {
    this.role = JSON.parse(window.localStorage.getItem('user') || '').role;
    this.router.navigate(['/allproducts']).then(() => {});
  }

  getVinylsCategory(text: any) {
    this.productService.getVinylsFromCategory(text.id).subscribe((items) => {
      console.log(items);
    });
  }

  logOut() {
    this.userService.logout();
    this.role === 0;
    this.authState = false;
    this.username = '';
    window.localStorage.removeitem('user');
  }
}
