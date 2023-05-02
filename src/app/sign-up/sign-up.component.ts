import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
    <app-homelayout></app-homelayout>
    
    <div class="container my-1">
      <a routerLink="/login">← Go to Login</a>

      <h2>Signup</h2>
      <form>
        <div class="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
          />
        </div>
        <div class="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
          />
        </div>
        <div class="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
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
        <div class="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class SignUpComponent {

}
