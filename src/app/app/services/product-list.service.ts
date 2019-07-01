import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

 getProducts(): Observable<Array<Product>> {
  return this.http.get<Array<Product>>(this.productsUrl);
}
}
