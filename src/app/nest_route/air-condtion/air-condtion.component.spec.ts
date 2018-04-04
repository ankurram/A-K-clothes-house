import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirCondtionComponent } from './air-condtion.component';

describe('AirCondtionComponent', () => {
  let component: AirCondtionComponent;
  let fixture: ComponentFixture<AirCondtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirCondtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirCondtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
