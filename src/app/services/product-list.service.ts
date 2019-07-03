import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductListService {
  productsUrl = "http://localhost:3000/products";
  editmode = false;
  products: Array<Product>;

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get<Array<Product>>(this.productsUrl)
      .subscribe(products => (this.products = products));
  }

  saveProduct(data) {
    if (this.products.find(item => item.id === data.id) === undefined) {
      this.http.post(this.productsUrl, data).subscribe();
      this.products.push(data);
    } else {
      this.http.put(`${this.productsUrl}/${data.id}`, data).subscribe();
    }
    this.toggleEditMode();
  }

  deleteProduct(productId) {
    this.http.delete(`${this.productsUrl}/${productId}`).subscribe();
  }

  toggleEditMode() {
    this.editmode = !this.editmode;
  }
}
