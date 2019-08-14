import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './components/verification/verification.component';
import { BudgetComponent } from './components/budget/budget.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { GeneralComponent } from './components/general/general.component';
import { ConfigurationComponent } from './configuration.component';

@NgModule({
  declarations: [ConfigurationComponent, VerificationComponent, BudgetComponent, GeneralComponent, AssessmentComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfigurationComponent, VerificationComponent, BudgetComponent, GeneralComponent, AssessmentComponent]
})
export class ConfigurationModule { }
