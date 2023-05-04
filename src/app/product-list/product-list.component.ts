import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../models';
import { CartComponent } from '../cart/cart.component';
import { CartItemsComponent } from '../cart-items/cart-items.component';

@Component({
  selector: 'app-product-list',
  template: `
      <div class="my-2">
      <h2>Our Products:</h2>

        <div *ngIf="products.length !== 0; else elseBlock" class="flex-row">
          <div *ngFor="let product of products" class="card px-1 py-1"> 
          <a 
            routerLink="/products/{{product.id}}" 
            >
              <img
                alt="{{product.name}}"
                src="../../assets/{{product.image}}"
              />
              <p>{{product.name}}</p>
            </a>
            <div>
              <div>{{product.quantity}} items in stock</div>
              <span>{{"$"}}{{product.price}}</span>
            </div>
          <button (click)="addToCartClick(product)">Add to cart</button>
          </div>
        </div>
        <ng-template #elseBlock>
          <h3>You haven't added any products yet!</h3>
          <img 
            alt="loading"
            src="../../assets/spinner.gif"
          />
        </ng-template>
      </div>
  `,
  styles: [
  ],
  providers: [CartComponent, CartItemsComponent]
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
      this.productsService.currentValue.subscribe(products => this.products = products);
  }

  addToCartClick(product: Product): void {
    this.productsService.addToCart(product);
  }

}
