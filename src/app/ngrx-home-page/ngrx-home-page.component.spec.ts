import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxHomePageComponent } from './ngrx-home-page.component';

describe('NgrxHomePageComponent', () => {
  let component: NgrxHomePageComponent;
  let fixture: ComponentFixture<NgrxHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxHomePageComponent]
    });
    fixture = TestBed.createComponent(NgrxHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
