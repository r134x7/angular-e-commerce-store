import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryUserDetailComponent } from './order-history-user-detail.component';

describe('OrderHistoryUserDetailComponent', () => {
  let component: OrderHistoryUserDetailComponent;
  let fixture: ComponentFixture<OrderHistoryUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistoryUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderHistoryUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
