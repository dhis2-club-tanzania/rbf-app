import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVerificationComponent } from './edit-verification.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditVerificationComponent', () => {
  let component: EditVerificationComponent;
  let fixture: ComponentFixture<EditVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [EditVerificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
