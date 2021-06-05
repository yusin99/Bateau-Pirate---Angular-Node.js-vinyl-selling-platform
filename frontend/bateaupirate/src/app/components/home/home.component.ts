import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts(9).subscribe((prods: any) => {
      this.products = prods.products;
      console.log(this.products[3]);
      // console.log(prods.products[3]['photo']);
    });
  }
}
