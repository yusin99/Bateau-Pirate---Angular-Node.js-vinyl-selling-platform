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
  role!: number;
  constructor(
    public cartService: CartService,
    public productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe((total) => (this.cartTotal = total));
    this.cartService.cartData$.subscribe((data) => (this.cartData = data));
    if (window.localStorage.getItem('user')) {
      this.authState = true;
      this.role = JSON.parse(window.localStorage.getItem('user') || '').role;
    } else {
      this.authState = false;
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
    this.authState = false;
    window.localStorage.removeitem('user');
  }
}
