import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { NgxSpinnerService } from 'ngx-spinner';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartTotal!: number;
  cartData!: CartModelServer;
  isTrue: boolean = false;
  error!: any;
  success!: any;
  name2: string = '';
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  stripeTest: FormGroup | null | undefined;
  constructor(
    public cartService: CartService,
    private orderService: OrderService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}
  ngOnInit(): void {
    this.cartService.cartData$.subscribe((data) => (this.cartData = data));
    this.cartService.cartTotal$.subscribe((total) => (this.cartTotal = total));
    this.name2 =
      JSON.parse(window.localStorage.getItem('user') || '').prenom +
      ' ' +
      JSON.parse(window.localStorage.getItem('user') || '').nom;
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
  async onCheckout() {
    const name = this.stripeTest.get('name').value || undefined;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          this.error = '';
          this.success = 'Everything seems correct...';
          this.spinner.show().then((p) => {
            this.cartService.CheckoutFromCart(
              JSON.parse(window.localStorage.getItem('user') || '').idClient ||
                JSON.parse(window.localStorage.getItem('user') || '').id
            );
          });
          console.log(result.token.id);
        } else if (result.error) {
          this.success = '';
          this.error = result.error.message;
          console.log(result.error.message);
        }
      });
  }
}
