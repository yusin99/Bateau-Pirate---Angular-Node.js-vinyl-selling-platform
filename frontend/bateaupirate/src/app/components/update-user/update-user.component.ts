import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from './../../services/cart.service';
import { SingleProductComponent } from './../single-product/single-product.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  user!: any;
  id!: number;
  email!: string;
  mdp1!: string;
  mdp2!: string;
  nom!: string;
  prenom!: string;
  pseudo!: string;
  photoUrl: string =
    'https://www.seekpng.com/png/full/356-3562377_personal-user.png';
  error!: string;
  success!: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.idClient;
        })
      )
      .subscribe((prodId) => {
        this.id = prodId;
        // this.getSingleProduct();
        console.log(prodId);
        this.userService.getSingleUser(prodId).subscribe((user: any) => {
          this.user = user;
          this.email = this.user.users[0].email;
          this.nom = this.user.users[0].nom;
          this.prenom = this.user.users[0].prenom;
          this.pseudo = this.user.users[0].pseudo;
        });
      });
  }
}
