import { Component } from '@angular/core';

@Component({
  selector: 'app-homelayout',
  template: `
    <header class="flex-row px-1">
      <h1>
        <a routerLink="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          Angular-RxJS-Shop
        </a>
      </h1>
    </header>

    <div class="container">
      <app-category-menu></app-category-menu>
      <app-product-list></app-product-list>
      <app-cart></app-cart>
    </div>
  `,
  styles: [
  ]
})
export class HomelayoutComponent {

}
