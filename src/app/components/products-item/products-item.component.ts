import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ProductItemDetailsComponent } from "../product-item-details/product-item-details.component";

@Component({
  selector: "app-products-item",
  templateUrl: "./products-item.component.html",
  styleUrls: ["./products-item.component.scss"]
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Product;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(product): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = product;

    this.dialog.open(ProductItemDetailsComponent, dialogConfig);
  }
}
