import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}
  API_KEY = 'http://localhost:3000/api';
  getAllProducts(numberOfResults: number = 10) {
    return this.http.get(this.API_KEY + '/products', {
      params: {
        limit: numberOfResults.toString(),
      },
    });
  }
}
