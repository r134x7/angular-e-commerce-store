import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-home-page',
  template: `
    <app-ngrx-home-layout></app-ngrx-home-layout>

    <div class="container">
      <app-ngrx-product-list></app-ngrx-product-list>
    </div>
  `,
  styles: [
  ]
})
export class NgrxHomePageComponent {

}
