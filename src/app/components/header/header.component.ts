import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ProductItemDetailsComponent } from "../product-item-details/product-item-details.component";
import { Product } from "src/app/models/product.model";
import { Guid } from "guid-typescript";
import { ProductListService } from "src/app/services/product-list.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public productListService: ProductListService
  ) {}

  ngOnInit() {}

  createNewProduct() {
    const product: Product = {
      id: null,
      name: "",
      number: "",
      description: "",
      images: []
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product;
    this.productListService.editmode = true;
    dialogConfig.height = "90vh";
    this.dialog.open(ProductItemDetailsComponent, dialogConfig);
  }
}
