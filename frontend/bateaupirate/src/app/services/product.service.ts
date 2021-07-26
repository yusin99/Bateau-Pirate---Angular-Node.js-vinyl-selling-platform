import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductModelServer } from '../models/product.model';
import { SingleProductModelServer } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}
  API_KEY = 'http://localhost:3000/api';
  getAllProducts(numberOfResults: number = 6) {
    return this.http.get(this.API_KEY + '/products/', {
      params: {
        limit: numberOfResults.toString(),
      },
    });
  }
  getSingleProduct(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.API_KEY + '/products/' + id);
  }
  getAllSongs(id: number): Observable<SingleProductModelServer> {
    return this.http.get<SingleProductModelServer>(
      this.API_KEY + '/products/piste/' + id
    );
  }
}
