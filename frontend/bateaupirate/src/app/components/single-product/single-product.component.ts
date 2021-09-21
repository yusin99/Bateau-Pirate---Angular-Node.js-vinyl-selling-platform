import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

declare let $: any;

@Component({
  selector: 'mg-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements AfterViewInit, OnInit {
  id!: number;
  product: any;
  songs: any;
  thumbimages: any[] = [];

  @ViewChild('quantity') quantityInput: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.id;
        })
      )
      .subscribe((prodId) => {
        this.id = prodId;
        this.getSingleProduct();
        this.getSingleProductSongs();
      });
  }

  navigateAllProducts() {
    this.router.navigate(['/allproducts']).then();
  }

  getSingleProduct() {
    this.productService.getSingleProduct(this.id).subscribe((prod) => {
      this.product = prod;
      if (prod.photo !== null) {
        this.thumbimages = prod.photo.split(';');
      }
      console.log(this.product);
    });
  }

  getSingleProductSongs() {
    this.productService.getAllSongs(this.id).subscribe((prod) => {
      this.songs = prod;
      // if (prod.photo !== null) {
      //   this.thumbimages = prod.photo.split(';');
      // }
      console.log(this.songs);
    });
  }

  ngAfterViewInit(): void {
    // Product Main img Slick
    // $('#product-main-img').slick({
    //   infinite: true,
    //   speed: 300,
    //   dots: false,
    //   arrows: true,
    //   fade: true,
    //   asNavFor: '#product-imgs',
    // });
    // // Product imgs Slick
    // $('#product-imgs').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   centerMode: true,
    //   focusOnSelect: true,
    //   centerPadding: 0,
    //   vertical: true,
    //   asNavFor: '#product-main-img',
    //   responsive: [
    //     {
    //       breakpoint: 991,
    //       settings: {
    //         vertical: false,
    //         arrows: false,
    //         dots: true,
    //       },
    //     },
    //   ],
    // });
    // // Product img zoom
    // var zoomMainProduct = document.getElementById('product-main-img');
    // if (zoomMainProduct) {
    //   $('#product-main-img .product-preview').zoom();
    // }
  }

  addToCart(id: number) {
    this.cartService.AddProductToCart(
      id,
      this.quantityInput.nativeElement.value
    );
  }

  Increase() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.product.quantite_dispo >= 1) {
      value++;

      if (value > this.product.quantite_dispo) {
        // @ts-ignore
        value = this.product.quantite_dispo;
      }
    } else {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }

  Decrease() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.product.quantite_dispo > 0) {
      value--;

      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInput.nativeElement.value = value.toString();
  }
}
