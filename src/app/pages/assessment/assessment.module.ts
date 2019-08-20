import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { RoutingModule } from 'src/app//pages/assessment/assessment.routes';
import { NgxDhis2OrgUnitFilterModule } from '@iapps/ngx-dhis2-org-unit-filter';

@NgModule({
  declarations: [AssessmentComponent],
  imports: [
    CommonModule,
    RoutingModule,
    NgxDhis2OrgUnitFilterModule
  ]
})
export class AssessmentModule { }
