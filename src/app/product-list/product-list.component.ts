import { Component, OnInit } from '@angular/core';
import { Observable, from, map, tap } from "rxjs";
import { ProductsService } from '../products.service';
import { Product } from '../models';

/*
template reference
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
*/

@Component({
  selector: 'app-product-list',
  template: `
      <div className="my-2">
      <h2>Our Products:</h2>

      <!-- {state.products.length ? ( -->
        <div *ngIf="products" className="flex-row">
          <div *ngFor="let product of products" className="card px-1 py-1"> 
            <p>{{product.name}}</p>
            <div>
              <div>{{product.quantity}} in stock</div>
              <span>{{product.price}}</span>
            </div>
          <!-- <button onClick={addToCart}>Add to cart</button> -->
          </div>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class ProductListComponent {

  // product list needs to be displayed by calling obsevables
  // start with empty products to fill
  products: Product[] = [];

  // dependency injection site. Becomes a singleton instance of ProductsService.
  constructor(private productsService: ProductsService) {}

  // rely on ngOnInit lifecycle hook to call getProducts
  ngOnInit(): void {
    this.getProducts();
  }

  // implement method to call products from mock
  getProducts(): void {
    this.products = this.productsService.getProducts();
  }

}
