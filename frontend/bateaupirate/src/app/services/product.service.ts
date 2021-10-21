import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ProductModelServer } from '../models/product.model';
import { SingleProductModelServer } from '../models/product.model';
import { CategoriesModel } from '../models/categories.model';
import { NumberFormatStyle } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { GroupesModel } from './../models/groupes.model';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}
  API_KEY = environment.api_key;
  getAllProducts(numberOfResults: NumberFormatStyle) {
    return this.http.get(this.API_KEY + '/products/', {
      params: {
        limit: numberOfResults.toString(),
      },
    });
  }

  getSingleProduct(id: number): Observable<SingleProductModelServer> {
    return this.http.get<SingleProductModelServer>(
      this.API_KEY + '/products/' + id
    );
  }

  getAllSongs(id: number): Observable<SingleProductModelServer> {
    return this.http.get<SingleProductModelServer>(
      this.API_KEY + '/products/piste/' + id
    );
  }
  getAllCategories(): Observable<CategoriesModel> {
    return this.http.get<CategoriesModel>(this.API_KEY + '/products/category');
  }
  getAllGroupes(): Observable<GroupesModel> {
    return this.http.get<GroupesModel>(this.API_KEY + '/products/groupes');
  }
  getVinylsFromCategory(category: string): Observable<ProductModelServer> {
    this.router.navigate(['/category/' + category]);
    return this.http.get<ProductModelServer>(
      this.API_KEY + '/products/category/' + category
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  postNewVinyl(
    nomVinyl: string,
    annee_sortie: number,
    idCategorie: number,
    idGroupe: number,
    photo: string,
    prixHT: number,
    quantite_dispo: number,
    description: string
  ): Observable<any> {
    console.log(
      nomVinyl,
      annee_sortie,
      idCategorie,
      idGroupe,
      prixHT,
      quantite_dispo,
      description
    );
    return this.http
      .post<any>(this.API_KEY + '/products/addVinyl', {
        nomVinyl,
        annee_sortie,
        idCategorie,
        idGroupe,
        photo,
        prixHT,
        quantite_dispo,
        description,
      })
      .pipe(catchError(this.errorHandler));
  }
}
