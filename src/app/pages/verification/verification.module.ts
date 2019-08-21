import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './components/verification/verification.component';
import { RoutingModule } from './verification.routes';
import { NgxDhis2OrgUnitFilterModule } from '@iapps/ngx-dhis2-org-unit-filter';
import { MatProgressSpinnerModule } from '@angular/material';
import { NgxDhis2PeriodFilterModule } from '@iapps/ngx-dhis2-period-filter';


@NgModule({
  declarations: [VerificationComponent],
  imports: [
    CommonModule,
    RoutingModule,
    NgxDhis2OrgUnitFilterModule,
    NgxDhis2PeriodFilterModule,
    MatProgressSpinnerModule
  ]
})
export class VerificationModule { }
