import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../models';
import { ProductsService } from '../products.service';
import { ProductListComponent } from '../product-list/product-list.component';

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

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories().subscribe(elem => this.categories = elem);
  }

  categoryTrack(index: number, item: any) {
    return item.id;
  }

  filterProductsByCategory(categoryId: number): void {
    this.productService.filterProducts(categoryId);
  }

}
