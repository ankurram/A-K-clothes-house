import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoardComponent } from './loard.component';

describe('LoardComponent', () => {
  let component: LoardComponent;
  let fixture: ComponentFixture<LoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
