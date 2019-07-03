import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class ProductListService {
  productsUrl = "http://localhost:3000/products";
  editmode = false;
  products: any;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  getProducts() {
    this.http
      .get<Array<Product>>(this.productsUrl)
      .subscribe(products => (this.products = products));
  }

  saveProduct(data) {
    if (this.products.find(item => item.id === data.id) === undefined) {
      this.http
        .post(this.productsUrl, data)
        .subscribe(resp => this.products.push(resp));
    } else {
      this.http.put(`${this.productsUrl}/${data.id}`, data).subscribe();
    }
    this.toggleEditMode();
  }

  deleteProduct(productId) {
    this.http.delete(`${this.productsUrl}/${productId}`).subscribe(_ => {
      this.products = this.products.filter(item => {
        return item.id !== productId;
      });
      this.dialog.closeAll();
    });
  }

  toggleEditMode() {
    this.editmode = !this.editmode;
  }
}
