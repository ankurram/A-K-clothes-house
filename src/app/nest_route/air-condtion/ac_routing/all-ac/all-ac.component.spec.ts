import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcComponent } from './all-ac.component';

describe('AllAcComponent', () => {
  let component: AllAcComponent;
  let fixture: ComponentFixture<AllAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
