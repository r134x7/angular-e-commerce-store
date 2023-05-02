import { Component } from '@angular/core';

@Component({
  selector: 'app-no-match',
  template: `

    <app-homelayout></app-homelayout>
    <div>
      <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
    </div>
  `,
  styles: [
  ]
})
export class NoMatchComponent {

}
