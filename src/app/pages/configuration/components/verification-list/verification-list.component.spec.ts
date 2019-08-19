import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationListComponent } from './verification-list.component';

describe('VerificationListComponent', () => {
  let component: VerificationListComponent;
  let fixture: ComponentFixture<VerificationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
