import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxHomeLayoutComponent } from './ngrx-home-layout.component';

describe('NgrxHomeLayoutComponent', () => {
  let component: NgrxHomeLayoutComponent;
  let fixture: ComponentFixture<NgrxHomeLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxHomeLayoutComponent]
    });
    fixture = TestBed.createComponent(NgrxHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
