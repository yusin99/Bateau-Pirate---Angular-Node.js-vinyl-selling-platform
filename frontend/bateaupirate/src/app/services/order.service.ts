import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  products: ProductResponseModel[] = [];
  API_KEY = environment.api_key;

  constructor(private http: HttpClient) {}

  getSingleOrder(orderId: number) {
    return this.http
      .get<ProductResponseModel[]>(`${this.API_KEY}orders/${orderId}`)
      .toPromise();
  }
  getOrderByClientId(clientId: number) {
    return this.http
      .get<ProductResponseModel[]>(`${this.API_KEY}orders/client/${clientId}`)
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
