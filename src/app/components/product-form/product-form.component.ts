import { Component, OnInit, Input } from "@angular/core";
import { Product, Image } from "src/app/models/product.model";
import { ProductListService } from "src/app/services/product-list.service";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit {
  constructor(private productListService: ProductListService) {}
  @Input() product: Product;
  @Input() newProduct: boolean;
  workingProductCopy: Product;

  ngOnInit() {
    if (this.newProduct) {
      this.workingProductCopy = new Product();
    } else {
      this.workingProductCopy = { ...this.product };
    }
  }

  newImage() {
    const img = new Image();
    this.product.images.push(img);
  }

  removeImage(image) {
    this.workingProductCopy.images = this.workingProductCopy.images.filter(
      item => item !== image
    );
  }

  saveProduct() {
    this.productListService.saveProduct(this.workingProductCopy);
  }
}
