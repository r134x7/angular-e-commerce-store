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

      <nav>

        <ul *ngIf="loggedIn else elseBlock" class="flex-row">
          <li class="mx-1">
            <a routerLink="/orderHistory">
              Order History
            </a>
          </li>
          <li class="mx-1">
            <a routerLink="/">
              Logout
            </a>
          </li>
        </ul>

      <ng-template #elseBlock>
        <ul class="flex-row">
          <li class="mx-1">
            <a routerLink="/signup">
              Signup
            </a>
          </li>
          <li class="mx-1">
            <a routerLink="/login">
              Login
            </a>
          </li>
        </ul>
        </ng-template>
      </nav>
    </header>
  `,
  styles: [
  ]
})
export class HomelayoutComponent {

  loggedIn: boolean = false;
}
