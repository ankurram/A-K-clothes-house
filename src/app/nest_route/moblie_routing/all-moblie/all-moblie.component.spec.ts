import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoblieComponent } from './all-moblie.component';

describe('AllMoblieComponent', () => {
  let component: AllMoblieComponent;
  let fixture: ComponentFixture<AllMoblieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMoblieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMoblieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
