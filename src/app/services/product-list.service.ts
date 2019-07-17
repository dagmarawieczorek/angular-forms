import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class ProductListService {
  productsUrl = "http://localhost:3000/products";
  editmode = false;
  products: Array<Product>;

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  getProducts() {
    this.http
      .get<Array<Product>>(this.productsUrl)
      .subscribe(products => (this.products = products));
  }

  saveProduct(data) {
    if (this.products.find(item => item.id === data.id) === undefined) {
      this.http.post(this.productsUrl, data).subscribe(
        resp => {
          this.products.push(resp as Product);
          this.showSnackBar("Product was added");
          this.closeDialogs();
        },
        error => {
          this.showSnackBar(error.error.message);
        }
      );
    } else {
      this.http.put(`${this.productsUrl}/${data.id}`, data).subscribe(
        _ => {
          this.showSnackBar("Product was updated");
          this.toggleEditMode();
          this.closeDialogs();
          this.getProducts();
        },
        error => {
          this.showSnackBar(error.error.message);
        }
      );
    }
  }

  deleteProduct(productId) {
    this.http.delete(`${this.productsUrl}/${productId}`).subscribe(
      _ => {
        this.products = this.products.filter(item => {
          return item.id !== productId;
        });
        this.closeDialogs();
        this.showSnackBar("Product was deleted");
      },
      error => {
        this.showSnackBar(error.error.message);
      }
    );
  }

  toggleEditMode() {
    this.editmode = !this.editmode;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, "OK", {
      duration: 2000
    });
  }

  closeDialogs() {
    this.dialog.closeAll();
  }
}
