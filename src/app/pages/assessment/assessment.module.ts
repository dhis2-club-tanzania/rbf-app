import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { RoutingModule } from 'src/app//pages/assessment/assessment.routes';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class AssessmentModule { }
