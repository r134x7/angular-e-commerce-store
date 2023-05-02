import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
    <app-homelayout></app-homelayout>

    <div class="container">
      <app-category-menu></app-category-menu>
      <app-product-list></app-product-list>
      <app-cart></app-cart>
    </div>
  `,
  styles: [
  ]
})
export class HomePageComponent {

}
