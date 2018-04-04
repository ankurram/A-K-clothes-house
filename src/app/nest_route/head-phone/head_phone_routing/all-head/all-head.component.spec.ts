import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHeadComponent } from './all-head.component';

describe('AllHeadComponent', () => {
  let component: AllHeadComponent;
  let fixture: ComponentFixture<AllHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
