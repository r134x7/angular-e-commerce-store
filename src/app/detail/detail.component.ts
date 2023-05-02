import { Component } from '@angular/core';
import { Product } from '../models';
import { ProductsService } from '../products.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-detail',
  template: `
        <div className="container my-1">
          <a to="/">← Back to Products</a>

          <div *ngIf="product !== undefined; else elseBlock">
          <h2>{{product.name}}</h2>

          <p>{{product.description}}</p>

          <p>
            <strong>Price:</strong>{{product.price}}
            <button (click)="addToCart(product)">Add to Cart</button>
            <button
            >
              Remove from Cart
            </button>
          </p>

          <img
                alt="{{product.name}}"
                src="../../assets/{{product.image}}"
          />
        </div>
          <ng-template #elseBlock>
          <img 
            alt="loading"
            src="../../assets/spinner.gif"
          />
        </ng-template>
        </div>
  `,
  styles: [
  ],
  providers: [ProductListComponent]
})
export class DetailComponent {

  product: Product | undefined = undefined;

  constructor(private productService: ProductsService, private productListComponent: ProductListComponent) {}

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(elem => this.product = elem);
  }

  addToCart(product: Product): void {
    this.productListComponent.addToCartClick(product);
  }
}
