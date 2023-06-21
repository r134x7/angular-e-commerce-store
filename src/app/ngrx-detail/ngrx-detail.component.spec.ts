import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDetailComponent } from './ngrx-detail.component';

describe('NgrxDetailComponent', () => {
  let component: NgrxDetailComponent;
  let fixture: ComponentFixture<NgrxDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxDetailComponent]
    });
    fixture = TestBed.createComponent(NgrxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
