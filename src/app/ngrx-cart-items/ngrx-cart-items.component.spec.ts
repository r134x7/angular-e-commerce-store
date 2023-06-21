import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCartItemsComponent } from './ngrx-cart-items.component';

describe('NgrxCartItemsComponent', () => {
  let component: NgrxCartItemsComponent;
  let fixture: ComponentFixture<NgrxCartItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxCartItemsComponent]
    });
    fixture = TestBed.createComponent(NgrxCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
