import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './components/verification/verification.component';
import { BudgetComponent } from './components/budget/budget.component';
import { AssessmentComponent } from './components/assessment/assessment.component'
import { GeneralComponent } from './components/general/general.component';

@NgModule({
  declarations: [VerificationComponent, BudgetComponent, GeneralComponent, AssessmentComponent],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule { }
