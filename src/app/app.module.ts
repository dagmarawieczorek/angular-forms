import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductsItemComponent } from "./components/products-item/products-item.component";
import { ProductItemDetailsComponent } from "./components/product-item-details/product-item-details.component";
import {
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule
} from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { HeaderComponent } from "./components/header/header.component";
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsItemComponent,
    ProductItemDetailsComponent,
    ProductFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule
  ],
  entryComponents: [ProductItemDetailsComponent],
  providers: [{ provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {}
