import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  products: ProductResponseModel[] = [];
  API_KEY = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getSingleOrder(orderId: Number) {
    return this.http
      .get<ProductResponseModel[]>(`${this.API_KEY}orders/${orderId}`)
      .toPromise();
  }
}

interface ProductResponseModel {
  id: Number;
  title: String;
  description: String;
  price: Number;
  quantityOrdered: Number;
  image: String;
}
