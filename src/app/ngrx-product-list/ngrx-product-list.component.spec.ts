import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxProductListComponent } from './ngrx-product-list.component';

describe('NgrxProductListComponent', () => {
  let component: NgrxProductListComponent;
  let fixture: ComponentFixture<NgrxProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxProductListComponent]
    });
    fixture = TestBed.createComponent(NgrxProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
