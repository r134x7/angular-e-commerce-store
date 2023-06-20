import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCategoryMenuComponent } from './ngrx-category-menu.component';

describe('NgrxCategoryMenuComponent', () => {
  let component: NgrxCategoryMenuComponent;
  let fixture: ComponentFixture<NgrxCategoryMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCategoryMenuComponent]
    });
    fixture = TestBed.createComponent(NgrxCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
