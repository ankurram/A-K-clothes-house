import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoblieComponent } from './moblie.component';

describe('MoblieComponent', () => {
  let component: MoblieComponent;
  let fixture: ComponentFixture<MoblieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoblieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoblieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
