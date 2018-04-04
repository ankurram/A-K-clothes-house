import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParoductInfoComponent } from './paroduct-info.component';

describe('ParoductInfoComponent', () => {
  let component: ParoductInfoComponent;
  let fixture: ComponentFixture<ParoductInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParoductInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParoductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
