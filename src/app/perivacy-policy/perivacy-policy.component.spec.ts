import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerivacyPolicyComponent } from './perivacy-policy.component';

describe('PerivacyPolicyComponent', () => {
  let component: PerivacyPolicyComponent;
  let fixture: ComponentFixture<PerivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
