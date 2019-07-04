import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ProductItemDetailsComponent } from "../product-item-details/product-item-details.component";
import { ProductListService } from "src/app/services/product-list.service";

@Component({
  selector: "app-products-item",
  templateUrl: "./products-item.component.html",
  styleUrls: ["./products-item.component.scss"]
})
export class ProductsItemComponent implements OnInit {
  @Input() product: Product;
  constructor(
    public dialog: MatDialog,
    private productListService: ProductListService
  ) {}

  ngOnInit() {}

  openDialog(product): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = product;
    dialogConfig.height = "90vh";
    this.dialog.open(ProductItemDetailsComponent, dialogConfig);
  }
}
