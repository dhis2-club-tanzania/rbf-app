import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationComponent } from './verification.component';
import { ReactiveFormsModule } from '@angular/forms';

import { reducers, metaReducers } from 'src/app/store/reducers';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('VerificationComponent', () => {
  let component: VerificationComponent;
  let fixture: ComponentFixture<VerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerificationComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
