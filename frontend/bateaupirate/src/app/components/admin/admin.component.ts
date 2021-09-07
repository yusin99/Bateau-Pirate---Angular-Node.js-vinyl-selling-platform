import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { UserModelServer } from './../../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  products: ProductModelServer[] = [];
  totalLength: number | undefined;
  totalLengthUser: number | undefined;
  users: UserModelServer[] = [];
  page = 1;
  pageUser = 1;
  constructor(
    private cartServiece: CartService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts(6000).subscribe((prods: any) => {
      console.log(prods.products[0]);
      this.products = prods.products;
      this.totalLength = prods.products.length;
    });
    this.userService.getAllUsers().subscribe((users: any) => {
      this.totalLengthUser = users.users.length;
      this.users = users.users;
    });
  }

  deleteClient(idClient: number) {
    var result = confirm('Do you really want to delete the user?');
    if (result) {
      this.userService.deleteSingleUser(idClient).subscribe((data) => {
        this.users = this.users.filter((item) => item.idClient !== idClient);
        this.totalLengthUser = this.users.length;
        console.log(data);
      });
    }
  }
  deleteVinyl(idVinyl: number) {
    var result = confirm('Do you really want to delete the vinyl?');
    if (result) {
      this.userService.deleteSingleVinyl(idVinyl).subscribe((data) => {
        this.products = this.products.filter(
          (item) => item.idVinyl !== idVinyl
        );
        this.totalLength = this.products.length;
        console.log(data);
      });
    }
  }
  navigateUpdate(idClient: number) {
    this.router.navigate(['/updateUser/', idClient]).then();
  }
}
