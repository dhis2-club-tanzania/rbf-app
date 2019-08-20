import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './configuration.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatIconModule } from '@angular/material';

import * as fromConfiguration from './components';
import { HttpClientModule } from '@angular/common/http';

import { NgxDhis2PeriodFilterModule } from '@iapps/ngx-dhis2-period-filter';
import { AssessmentListComponent } from './components/assessment-config/assessment-list/assessment-list.component';
import { VerificationListComponent } from './components/verification-config/verification-list/verification-list.component';
import { NgxDhis2OrgUnitFilterModule } from '@iapps/ngx-dhis2-org-unit-filter';
import { DataElementPipe } from './pipes/data-element.pipe';

@NgModule({
  declarations: [
    ...fromConfiguration.components,
    AssessmentListComponent,
    VerificationListComponent,
    DataElementPipe
  ],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDhis2PeriodFilterModule,
    NgxDhis2OrgUnitFilterModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ConfigurationModule {}
