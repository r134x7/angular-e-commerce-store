import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <app-homelayout></app-homelayout>
    
    <div class="container my-1">
      <a routerLink="/signup">← Go to Signup</a>

      <h2>Login</h2>
      <form>
        <div class="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div class="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
          <div *ngIf="error">
            <p class="error-text">The provided credentials are incorrect</p>
          </div>
        <div class="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent {

  error: boolean = false;
}
