import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { CartModelPublic, CartModelServer } from '../models/cart.model';
import {
  ProductModelServer,
  SingleProductModelServer,
} from '../models/product.model';
import { OrderService } from './order.service';
import { ProductService } from './product.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly API_KEY = environment.api_key;

  private cartDataClient: CartModelPublic = {
    total: 0,
    prodData: [
      {
        nomVinyl: '',
        photo: '',
        incart: 0,
        id: 0,
      },
    ],
  };

  // Data variable to store cart information on the server
  private cartDataServer: CartModelServer = {
    total: 0,
    data: [
      {
        numInCart: 0,
        product: undefined,
      },
    ],
  };
  /* OBSERVABLES FOR THE COMPONENTS TO SUBSCRIBE*/
  cartTotal$ = new BehaviorSubject<number>(0);
  cartData$ = new BehaviorSubject<CartModelServer>(this.cartDataServer);

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private toast: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.cartTotal$.next(this.cartDataServer.total);
    this.cartData$.next(this.cartDataServer);
    if (!window.localStorage.getItem('cart')) {
      window.localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    } else {
      const info: CartModelPublic = JSON.parse(
        localStorage.getItem('cart') || '{}'
      ) as CartModelPublic;

      if (
        info !== null &&
        info !== undefined &&
        info.prodData[0].incart !== 0
      ) {
        this.cartDataClient = info;
        //  Loop through each entry and put it in the cartDataServer object
        this.cartDataClient.prodData.forEach((p) => {
          this.productService
            .getSingleProduct(p.id)
            .subscribe((actualProductInfo: SingleProductModelServer) => {
              if (this.cartDataServer.data[0].numInCart === 0) {
                // this.cartDataServer.data[0].numInCart++;
                this.cartDataServer.data[0].numInCart = p.incart;
                this.cartDataServer.data[0].product = actualProductInfo; // Updates the product info
                this.CalculateTotal();
                this.cartDataClient.total = this.cartDataServer.total;
                localStorage.setItem(
                  'cart',
                  JSON.stringify(this.cartDataClient)
                ); // Updates the product info
              } else {
                // CartDataServer already has some entry in it
                this.cartDataServer.data.push({
                  numInCart: p.incart,
                  product: actualProductInfo,
                });
                this.CalculateTotal();
                this.cartDataClient.total = this.cartDataServer.total;
                localStorage.setItem(
                  'cart',
                  JSON.stringify(this.cartDataClient)
                );
              }
              this.cartData$.next({ ...this.cartDataServer });
            });
        });
      }
    }
  }
  setLocalStorage(name: string, data: any) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }
  AddProductToCart(id: number, quantity?: number) {
    this.productService.getSingleProduct(id).subscribe((prod) => {
      console.log(prod);
      //  1. If the cart is empty
      if (this.cartDataServer.data[0].product === undefined) {
        this.cartDataServer.data[0].product = prod;
        this.cartDataServer.data[0].numInCart =
          quantity !== undefined ? quantity : 1;
        this.CalculateTotal();
        this.cartDataClient.prodData[0].incart =
          this.cartDataServer.data[0].numInCart;
        this.cartDataClient.prodData[0].id = prod.idVinyl;
        this.cartDataClient.prodData[0].nomVinyl = prod.nomVinyl;
        this.cartDataClient.prodData[0].photo = prod.photo;
        this.cartDataClient.total = this.cartDataServer.total;
        this.setLocalStorage('cart', this.cartDataClient);
        // localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
        this.cartData$.next({ ...this.cartDataServer });
        this.toast.success(
          `${prod.nomVinyl} added to the cart`,
          'Product Added',
          {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
            closeButton: true,
          }
        );
      } else {
        const index = this.cartDataServer.data.findIndex(
          (p) => p.product.idVinyl === prod.idVinyl
        ); // -1 or a positive value
        //     a. if that item is already in the cart  =>  index is positive value
        if (index !== -1) {
          if (quantity !== undefined && quantity <= prod.quantite_dispo) {
            this.cartDataServer.data[index].numInCart =
              this.cartDataServer.data[index].numInCart < prod.quantite_dispo
                ? quantity
                : prod.quantite_dispo;
          } else {
            // tslint:disable-next-line:no-unused-expression
            this.cartDataServer.data[index].numInCart < prod.quantite_dispo
              ? this.cartDataServer.data[index].numInCart++
              : prod.quantite_dispo;
          }
          this.cartDataClient.prodData[index].incart =
            this.cartDataServer.data[index].numInCart;
          this.CalculateTotal();
          this.cartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.toast.info(
            `${prod.nomVinyl} quantity updated in the cart`,
            'Product Updated',
            {
              timeOut: 1500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right',
            }
          );
        } else {
          this.cartDataServer.data.push({
            numInCart: 1,
            product: prod,
          });

          this.cartDataClient.prodData.push({
            nomVinyl: prod.nomVinyl,
            photo: prod.photo,
            incart: 1,
            id: prod.idVinyl,
          });
          this.toast.success(
            `${prod.nomVinyl} added to the cart`,
            'Product Added',
            {
              timeOut: 1500,
              progressBar: true,
              progressAnimation: 'increasing',
              positionClass: 'toast-top-right',
            }
          );

          this.CalculateTotal();
          this.cartDataClient.total = this.cartDataServer.total;
          localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          this.cartData$.next({ ...this.cartDataServer });
        } // END OF ELSE
        // const arr = JSON.parse(window.localStorage.getItem('cart') || '{}');
      }
    });
  }

  UpdateCartItems(index: number, increase: boolean) {
    const data = this.cartDataServer.data[index];

    if (increase) {
      data.numInCart < data.product.quantite_dispo
        ? data.numInCart++
        : data.product.quantite_dispo;
      this.cartDataClient.prodData[index].incart = data.numInCart;
      this.CalculateTotal();
      this.cartDataClient.total = this.cartDataServer.total;
      localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      this.cartData$.next({ ...this.cartDataServer });
    } else {
      data.numInCart--;

      if (data.numInCart < 1) {
        this.DeleteProductFromCart(index);
        this.cartData$.next({ ...this.cartDataServer });
      } else {
        this.cartData$.next({ ...this.cartDataServer });
        this.cartDataClient.prodData[index].incart = data.numInCart;
        this.CalculateTotal();
        this.cartDataClient.total = this.cartDataServer.total;
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      }
    }
  }

  DeleteProductFromCart(index: number) {
    if (window.confirm('Are you sure you want to remove the item?')) {
      this.cartDataServer.data.splice(index, 1);
      this.cartDataClient.prodData.splice(index, 1);
      this.CalculateTotal();
      this.cartDataClient.total = this.cartDataServer.total;

      if (this.cartDataClient.total === 0) {
        this.cartDataClient = {
          total: 0,
          prodData: [{ nomVinyl: '', photo: '', incart: 0, id: 0 }],
        };
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      }

      if (this.cartDataServer.total === 0) {
        this.cartDataServer = {
          total: 0,
          data: [{ numInCart: 0, product: undefined }],
        };
        this.cartData$.next({ ...this.cartDataServer });
      } else {
        this.cartData$.next({ ...this.cartDataServer });
      }
    } else {
      // IF THE USER CLICKS THE CANCEL BUTTON
      return;
    }
  }
  private dataInfo: any;
  CheckoutFromCart(userId: number) {
    console.log(this.cartDataClient.prodData);
    this.http
      .post(`${this.API_KEY}/orders/payment`, null)
      .subscribe((res: any) => {
        if (res.success) {
          this.resetServerData();
          this.http
            .post(`${this.API_KEY}/orders/new`, {
              userId,
              products: this.cartDataClient.prodData,
            })
            .subscribe((data: any) => {
              console.log(this.cartDataClient);
              this.orderService.getSingleOrder(data.order_id).then((prods) => {
                console.log(data);
                this.dataInfo = data;
                if (data.success) {
                  const navigationExtras: NavigationExtras = {
                    state: {
                      message: data.message,
                      products: this.cartDataClient.prodData,
                      orderId: data.order_id,
                      total: this.cartDataClient.total,
                    },
                  };

                  this.spinner.hide().then();
                  this.router
                    .navigate(['/thankyou'], navigationExtras)
                    .then((p) => {
                      this.cartDataClient = {
                        total: 0,
                        prodData: [
                          { nomVinyl: '', photo: '', incart: 0, id: 0 },
                        ],
                      };
                      this.cartTotal$.next(0);
                      localStorage.setItem(
                        'cart',
                        JSON.stringify(this.cartDataClient)
                      );
                    });
                }
              });
            });
        } else {
          this.spinner.hide().then();
          this.router.navigateByUrl('/checkout').then();
          this.toast.error(`Sorry, failed to book the order`, 'Order Status', {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right',
          });
        }
      });
  }

  private CalculateTotal() {
    let Total = 0;

    this.cartDataServer.data.forEach((p) => {
      const { numInCart } = p;
      const { prixHT } = p.product;
      // console.log(p.product.prixHT);
      Total += numInCart * prixHT;
    });
    this.cartDataServer.total = Total;
    this.cartTotal$.next(this.cartDataServer.total);
  }

  private resetServerData() {
    this.cartDataServer = {
      total: 0,
      data: [
        {
          numInCart: 0,
          product: undefined,
        },
      ],
    };

    this.cartData$.next({ ...this.cartDataServer });
  }

  CalculateSubTotal(index: number): number {
    let subTotal = 0;

    const p = this.cartDataServer.data[index];
    // @ts-ignore

    subTotal = p.product.prixHT * p.numInCart;

    return subTotal;
  }
}

interface OrderResponse {
  order_id: number;
  success: boolean;
  message: string;
  products: [
    {
      id: string;
      numInCart: string;
    }
  ];
}
