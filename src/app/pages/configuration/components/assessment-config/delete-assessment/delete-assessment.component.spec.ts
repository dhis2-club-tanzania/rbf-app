import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssessmentComponent } from './delete-assessment.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';

describe('DeleteAssessmentComponent', () => {
  let component: DeleteAssessmentComponent;
  let fixture: ComponentFixture<DeleteAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [DeleteAssessmentComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
