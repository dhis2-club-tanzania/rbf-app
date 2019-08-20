import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './configuration.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMenuModule, MatIconModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

import * as fromConfiguration from './components';
import { HttpClientModule } from '@angular/common/http';

import { NgxDhis2PeriodFilterModule } from '@iapps/ngx-dhis2-period-filter';
import { AssessmentListComponent } from './components/assessment-list/assessment-list.component';
import { VerificationListComponent } from './components/verification-list/verification-list.component';

@NgModule({
  declarations: [...fromConfiguration.components, AssessmentListComponent, VerificationListComponent],
  imports: [
    CommonModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxDhis2PeriodFilterModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class ConfigurationModule {}
