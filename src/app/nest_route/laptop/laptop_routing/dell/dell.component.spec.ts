import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DellComponent } from './dell.component';

describe('DellComponent', () => {
  let component: DellComponent;
  let fixture: ComponentFixture<DellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
