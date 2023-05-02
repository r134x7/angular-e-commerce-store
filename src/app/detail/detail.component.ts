import { Component } from '@angular/core';
import { Product } from '../models';
import { ProductsService } from '../products.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  template: `
    <header class="flex-row px-1">
      <h1>
        <a routerLink="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          Angular-RxJS-Shop
        </a>
      </h1>
    </header>

        <div class="container my-1">
          <button type="button" (click)="goBack()">← Back to Products</button>

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


    <app-cart />
  `,
  styles: [
  ],
  providers: [ProductListComponent, CartComponent] // it seems providers also require their dependencies to have methods work correctly, i.e. ProductListComponent requires its dependency: CartComponent for method used to work
})
export class DetailComponent {

  product: Product | undefined = undefined;

  constructor(
    private productService: ProductsService, 
    private productListComponent: ProductListComponent,
    private route: ActivatedRoute,
    private location: Location,
    ) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")); 

    this.productService.getProduct(id).subscribe(elem => this.product = elem);
  }

  addToCart(product: Product): void {
    this.productListComponent.addToCartClick(product);
  }

  goBack(): void {
    this.location.back();
  }
}
