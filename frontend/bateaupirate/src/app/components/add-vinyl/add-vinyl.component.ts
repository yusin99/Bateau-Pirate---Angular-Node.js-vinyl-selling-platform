import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-vinyl',
  templateUrl: './add-vinyl.component.html',
  styleUrls: ['./add-vinyl.component.scss'],
})
export class AddVinylComponent implements OnInit {
  nomVinyl!: string;
  annee_sortie!: number;
  idCategorie!: string;
  idGroupe!: number;
  quantite_dispo!: number;
  description!: string;
  error!: string;
  success!: string;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  registerVinyl(form: NgForm) {
    const nomVinyl = this.nomVinyl;
    const annee_sortie = this.annee_sortie;
    const idCategorie = this.idCategorie;
    const idGroupe = this.idGroupe;
    const quantite_dispo = this.quantite_dispo;
    const description = this.description;
    if (form.invalid) {
      return;
    }
    this.productService
      .postNewVinyl(
        nomVinyl,
        annee_sortie,
        idCategorie,
        idGroupe,
        quantite_dispo,
        description
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
