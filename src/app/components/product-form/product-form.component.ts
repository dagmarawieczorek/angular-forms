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

  ngOnInit() {
    if (this.newProduct) {
      this.product = new Product();
    }
  }

  newImage() {
    const img = new Image();
    this.product.images.push(img);
  }

  removeImage(image) {
    this.product.images = this.product.images.filter(item => item !== image);
  }

  saveProduct() {
    this.productListService.saveProduct(this.product);
  }
}
