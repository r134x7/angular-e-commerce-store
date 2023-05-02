import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  template: `
    <app-homelayout></app-homelayout>
    <div className="container my-1">
        <a routerLink="/">← Back to Products</a>

    </div>
  `,
  styles: [
  ]
})
export class OrderHistoryComponent {

}
