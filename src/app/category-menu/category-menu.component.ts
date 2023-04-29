import { Component } from '@angular/core';

/*
reference
    <div>
      <h2>Choose a Category:</h2>
      {state.categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
*/

@Component({
  selector: 'app-category-menu',
  template: `
    <div>
      <h2>Choose a Category:</h2>
        <button
        >
        </button>
    </div>
  `,
  styles: [
  ]
})
export class CategoryMenuComponent {

  /*
  need to query category observables
  */
}
