import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './assessment.component';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule
  ],
  exports: [AssessmentComponent]
})
export class AssessmentModule { }
