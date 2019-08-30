import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { RoutingModule } from 'src/app//pages/assessment/assessment.routes';
import { NgxDhis2OrgUnitFilterModule } from '@iapps/ngx-dhis2-org-unit-filter';
import { MatProgressSpinnerModule, MatSelectModule } from '@angular/material';
import { NgxDhis2PeriodFilterModule } from '@iapps/ngx-dhis2-period-filter';
import { NgxDhis2SelectionFiltersModule } from '@iapps/ngx-dhis2-selection-filters';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    RoutingModule,
    NgxDhis2OrgUnitFilterModule,
    MatProgressSpinnerModule,
    NgxDhis2PeriodFilterModule,
    NgxDhis2SelectionFiltersModule,
    FormsModule,
    MatSelectModule
  ]
})
export class AssessmentModule {}
