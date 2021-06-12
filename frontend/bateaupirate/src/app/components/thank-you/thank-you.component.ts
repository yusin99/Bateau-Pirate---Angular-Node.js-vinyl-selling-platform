import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {
  message!: string;
  orderId!: number;

  cartTotal!: number;
  products: any[];
  constructor(
    private router: Router,
    private orderService: OrderService,
    private cartService: CartService
  ) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      message: string;
      products: ProductResponseModel[];
      orderId: number;
      total: number;
    };
    this.message = state.message;
    this.products = state.products;
    this.orderId = state.orderId;
    this.cartTotal = state.total;
    console.log(this.products);
  }

  ngOnInit(): void {}
}
interface ProductResponseModel {
  idCommande: number;
  date_commande: string;
  status_commande: string;
  prenom: string;
  nomVinyl: string;
  photo: string;
  quantite: number;
}
