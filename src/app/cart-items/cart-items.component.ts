import { Component, Input, signal } from '@angular/core';
import { Cart, Product } from '../models';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  template: `
      <div *ngIf="cart().length !== 0; else elseBlock" class="flex-row">
       <div *ngFor="let item of cart(); trackBy: itemsTrack" class="flex-row">
        <div>
            <img
              src="../../assets/{{item.products.image}}"
              alt="{{item.products.name}}"
            />
          </div>
          <div>
            <div>{{item.products.name}}, {{item.products.price}}</div>
            <div>
              <span>Qty: {{item.purchaseQuantity}}</span>
              <button (click)="addToCartClick(item.products)">+</button>
              <span
                role="img"
                aria-label="trash"
              >
                🗑️
              </span>
            </div>
          </div>
        </div>
      </div>

        <ng-template #elseBlock>
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
        </ng-template>
  `,
  styles: [
  ],
  providers: []
})
export class CartItemsComponent {

  // @Input() cart: Cart[] = [];
  // cart = signal<Cart[]>([])
  // cart = signal<Cart[]>(this.cartService.testTotal())
  cart = this.cartService.testTotal;

  constructor(public cartService: CartService) {}

  addToCartClick(product: Product): void {
    this.cartService.addToCart(product);
  }

  itemsTrack(index: number, item: Cart) {
    return item.products.id;
  }

  getProducts(): void {
      // this.cartService.currentValue.subscribe(cart => this.cart = cart);
      // this.cartService.currentValue.subscribe(cart => {
      //   console.log(cart);
      //   this.cart.set(cart) 
      // });
      console.log(this.cart());
      console.log(this.cart().length);
      
  }
}
