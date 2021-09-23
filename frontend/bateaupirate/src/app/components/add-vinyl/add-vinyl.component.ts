import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { CategoriesModel } from './../../models/categories.model';
import { GroupesModel } from './../../models/groupes.model';

@Component({
  selector: 'app-add-vinyl',
  templateUrl: './add-vinyl.component.html',
  styleUrls: ['./add-vinyl.component.scss'],
})
export class AddVinylComponent implements OnInit {
  nomVinyl!: string;
  annee_sortie!: number;
  idCategorie!: any;
  idGroupe!: any;
  prixHT!: number;
  photo!: string;
  quantite_dispo!: number;
  description!: string;
  groupes!: any;
  error!: string;
  success!: string;
  categories!: any;
  currentInput: any;
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService.getAllCategories().subscribe((cat: any) => {
      this.categories = cat;
    });
    this.productService.getAllGroupes().subscribe((groupes) => {
      this.groupes = groupes;
    });
  }
  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0].name;
      console.log(event.target.files[0].name);
    }
  }
  registerVinyl(form: NgForm) {
    const nomVinyl = this.nomVinyl;
    const annee_sortie = this.annee_sortie;
    const idCategorie = this.idCategorie;
    const idGroupe = this.idGroupe;
    const photo = this.photo;
    const prixHT = this.prixHT;
    const quantite_dispo = this.quantite_dispo;
    const description = this.description;
    if (form.invalid) {
      return;
    }
    let id = this.idCategorie.split('-');
    let idG = this.idGroupe.split('-');
    console.log(id);
    this.productService
      .postNewVinyl(
        nomVinyl,
        annee_sortie,
        id[0],
        idG[0],
        photo,
        prixHT,
        quantite_dispo,
        description
      )
      .subscribe(
        (data) => {
          form.reset();
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
