import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVerificationComponent } from './delete-verification.component';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';

describe('DeleteVerificationComponent', () => {
  let component: DeleteVerificationComponent;
  let fixture: ComponentFixture<DeleteVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVerificationComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      imports: [
        MatDialogModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
