import { Component, OnInit, Input, Inject } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: "app-product-item-details",
  templateUrl: "./product-item-details.component.html",
  styleUrls: ["./product-item-details.component.scss"]
})
export class ProductItemDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductItemDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productListService: ProductListService
  ) {}

  editmode = false;
  ngOnInit() {}

  toggleEditMode() {
    this.editmode = !this.editmode;
  }

  saveProduct() {
    this.productListService.updateProduct(this.data);
    this.toggleEditMode();
  }
}
