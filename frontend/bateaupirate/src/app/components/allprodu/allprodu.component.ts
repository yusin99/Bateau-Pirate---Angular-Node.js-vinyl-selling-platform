import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductModelServer } from './../../models/product.model';

@Component({
  selector: 'app-allprodu',
  templateUrl: './allprodu.component.html',
  styleUrls: ['./allprodu.component.scss'],
})
export class AllproduComponent implements OnInit {
  products: ProductModelServer[] = [];

  prices: any[] = [];
  vinyl: any[] = [];
  songs: any;
  totalLength: number | undefined;
  page = 1;
  categories: any = [];
  // @ViewChild('page') pageInput: any;
  constructor(
    private cartServiece: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((cat: any) => {
      this.categories = cat;
      console.log(cat.categories[0]);
    });
    this.productService.getAllProducts(12).subscribe((prods: any) => {
      this.products = prods.products;
      this.totalLength = prods.products.length;
      for (let i = 0; i < prods.products.length; i++) {
        this.prices.push(prods.products[i].prixHT);
        this.vinyl.push(prods.products[i].nomVinyl);
      }
    });
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product/', id]).then();
    console.log(id);
  }

  addToCart(idVinyl: number) {
    this.cartServiece.AddProductToCart(idVinyl);
  }
}
