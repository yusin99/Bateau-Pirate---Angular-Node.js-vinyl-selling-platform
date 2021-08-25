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
  categories: CategoriesModel[] = [];
  cartTotal!: number;
  authState!: boolean;
  constructor(
    public cartService: CartService,
    public productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((cat: any) => {
      console.log(cat.categories);
      this.categories = cat.categories;
    });
    this.cartService.cartTotal$.subscribe((total) => (this.cartTotal = total));

    this.cartService.cartData$.subscribe((data) => (this.cartData = data));

    if (window.localStorage.getItem('user')) {
      this.authState = true;
    } else {
      this.authState = false;
    }
    // this.userService.authState$.subscribe(
    //   (authState) => (this.authState = authState)
    // );
  }
  navigateAllProducts() {
    this.router.navigate(['/allproducts']).then();
  }
  logOut() {
    this.userService.logout();
  }
}
