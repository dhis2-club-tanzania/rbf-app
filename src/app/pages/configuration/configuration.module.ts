import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { GeneralComponent } from './components/general/general.component';
import { BudgetComponent } from './components/budget/budget.component';
import { VerificationComponent } from './components/verification/verification.component';
import { RoutingModule } from './configuration.routes';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ConfigurationListComponent } from './components/configuration-list/configuration-list.component';

@NgModule({
  declarations: [AssessmentComponent, GeneralComponent, BudgetComponent, VerificationComponent, ConfigurationComponent, ConfigurationListComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class ConfigurationModule { }
