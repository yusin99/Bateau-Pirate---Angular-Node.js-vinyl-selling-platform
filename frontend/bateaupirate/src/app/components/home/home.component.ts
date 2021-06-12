import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerResponse } from 'src/app/models/product.model';
import { ProductModelServer } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];
  prices: any[] = [];
  vinyl: any[] = [];
  public arr = JSON.parse(window.localStorage.getItem('cart') || '{}');

  constructor(
    private cartServiece: CartService,
    private productService: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // console.log(this.arr.prodData[0]);
    this.productService.getAllProducts(4).subscribe((prods: any) => {
      // console.log(prods);
      this.products = prods.products;
      for (let i = 0; i < prods.products.length; i++) {
        this.prices.push(prods.products[i].prixHT);
        this.vinyl.push(prods.products[i].nomVinyl);
      }
      // console.log(prods);
      // console.log(prods.products[0].nomVinyl);
      // console.log(this.products[2].nomVinyl);
      // this.prices.push(prods.products.prixHT);
      // console.log(this.prices);
    });
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product/', id]).then();
    console.log(id);
  }
  addToCart(idVinyl: number) {
    // console.log(idVinyl);
    this.cartServiece.AddProductToCart(idVinyl);
  }
}
