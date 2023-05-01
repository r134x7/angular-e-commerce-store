import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../models';
import { ProductsService } from '../products.service';
import { ProductListComponent } from '../product-list/product-list.component';

/*
JSX reference
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
          *ngFor="let category of categories; trackBy: categoryTrack"
          (click)="filterProductsByCategory(category.id)"
        >
        {{category.name}}
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
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(elem => this.categories = elem);
  }

  // need to add a click handle element that filters the items by category
  // does not have an option to show all categories when testing MERN stack version unless you refresh
  // I am actually supposed to filter products by category, not filter the categories, now to figure this out with Observables...
  // filterCategory(categoryId: number): void {
  //   this.categories = this.categories.filter(elem => elem.id === categoryId)
  // }


  categoryTrack(index: number, item: any) {
    return item.id;
  }

  // need to figure out how to subscribe to productsService from across components
  filterProductsByCategory(categoryId: number): void {
    this.productService.filterProducts(categoryId);
  }

}
