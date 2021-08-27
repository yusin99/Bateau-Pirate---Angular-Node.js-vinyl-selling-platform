import {
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { map } from 'rxjs/operators';
import {
  ProductModelServer,
  SingleProductModelServer,
} from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products: any = [];
  cat: any = null;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  // ngOnInit(): void {
  //   this.router.events.subscribe((val) => {
  //     // see also
  //     console.log(val);
  //   });
  //   this.initProducts();
  // }
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes.prop);
    this.initProducts();
  }
  initProducts() {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.category;
        })
      )
      .subscribe((cat) => {
        this.cat = cat;
      });
    this.productService.getVinylsFromCategory(this.cat).subscribe((items) => {
      this.products = items;
      console.log(this.products.products);
    });
  }
}
