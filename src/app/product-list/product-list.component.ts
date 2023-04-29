import { Component, OnInit } from '@angular/core';
import { Observable, from, map, tap } from "rxjs";
import { Product } from '../models';
import { products as mockProducts } from '../mock-product';

@Component({
  selector: 'app-product-list',
  template: `
    <p>
      product-list works!
    </p>
  `,
  styles: [
  ]
})
export class ProductListComponent implements ngOninit {

  // product list needs to be displayed by calling obsevables
  // start with empty products to fill
  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  // implement method to call products from mock
  getProducts(): Observable<Product[]> {
    this.products.getProd
  }

}
