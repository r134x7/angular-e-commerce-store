import { Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-home-layout',
  template: `
    <header class="flex-row px-1">
      <h1>
        <a routerLink="/ngrx">
          <span role="img" aria-label="shopping bag">🛍️</span>
          Angular-NgRx-Store
        </a>
      </h1>

      <nav>
        <ul class="flex-row">
          <li class="mx-1">
            <a routerLink="/">
              Go to RxJS Shop
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
  ]
})
export class NgrxHomeLayoutComponent {

  loggedIn: boolean = false;
}
