import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssessmentComponent } from './edit-assessment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';

describe('EditAssessmentComponent', () => {
  let component: EditAssessmentComponent;
  let fixture: ComponentFixture<EditAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [EditAssessmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
