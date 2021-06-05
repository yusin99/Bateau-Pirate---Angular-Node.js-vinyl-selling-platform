import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = [];
  prices: any[] = [];
  vinyl: any[] = [];
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit(): void {
    this.productService.getAllProducts(3).subscribe((prods: any) => {
      this.products = prods.products;
      for (let i = 0; i < prods.products.length; i++) {
        this.prices.push(prods.products[i].prixHT);
        this.vinyl.push(prods.products[i].nomVinyl);
      }
      console.log(prods);
      // console.log(prods.products[0].nomVinyl);
      // console.log(this.products[2].nomVinyl);
      // this.prices.push(prods.products.prixHT);
      console.log(this.prices);
    });
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}
