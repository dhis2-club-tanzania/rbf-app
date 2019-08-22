import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVerificationComponent } from './edit-verification.component';

describe('EditVerificationComponent', () => {
  let component: EditVerificationComponent;
  let fixture: ComponentFixture<EditVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
