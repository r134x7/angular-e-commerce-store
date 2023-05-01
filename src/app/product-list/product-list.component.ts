import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Product } from '../models';
import { CartComponent } from '../cart/cart.component';

/*
JSX reference
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

    // this won't work yet:
                <a 
            routerLink="/products/{{product.id}}" 
            >
*/

@Component({
  selector: 'app-product-list',
  template: `
      <div className="my-2">
      <h2>Our Products:</h2>

        <div *ngIf="products.length !== 0; else elseBlock" className="flex-row">
          <div *ngFor="let product of products" className="card px-1 py-1"> 
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
              <div>{{product.quantity}} in stock</div>
              <span>{{product.price}}</span>
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
  providers: [CartComponent]
})
export class ProductListComponent {

  // product list needs to be displayed by calling obsevables
  // start with empty products to fill
  products: Product[] = [];

  // dependency injection site. Becomes a singleton instance of ProductsService.
  constructor(private productsService: ProductsService, private cartService: CartService, private cartComponent: CartComponent) {
    // this.productsService.currentValue.subscribe(products => this.products = products);
  }

  // // rely on ngOnInit lifecycle hook to call getProducts
  ngOnInit(): void {
    this.getProducts();
  }

  // // implement method to call products from mock
  getProducts(): void {
    // this.productsService.getProducts()
      // .subscribe(products => this.products = products);
      this.productsService.currentValue.subscribe(products => this.products = products);
  }

  addToCartClick(product: Product): void {
    // requiring a method that calls addToCart at product page description or home page
    this.cartService.addToCart(product);
    this.cartComponent.getProducts();
    this.cartComponent.calculateTotal();
  }

}
