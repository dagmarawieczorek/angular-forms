import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productListService: ProductListService) { }

  products: Array<Product>;

  ngOnInit() {
    console.log("aaaaaaaaaa")
    this.productListService.getProducts().subscribe(products => {
      console.log(products)
      this.products=products});
    console.log(this.products)

  }

}
