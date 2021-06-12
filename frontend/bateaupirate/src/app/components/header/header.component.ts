import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartData!: CartModelServer;
  cartTotal!: number;
  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe((total) => {
      this.cartTotal = total;
    });
    this.cartService.cartData$.subscribe((data) => {
      this.cartData = data;
    });
  }
  navigateAllProducts() {
    this.router.navigate(['/allproducts']).then();
  }
}
