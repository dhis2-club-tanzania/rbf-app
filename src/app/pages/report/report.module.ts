import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { NgxDhis2SelectionFiltersModule } from '@iapps/ngx-dhis2-selection-filters';

import { ReportComponent } from './components/report/report.component';
import { RoutingModule } from './report.routes';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgxDhis2SelectionFiltersModule
  ]
})
export class ReportModule {}
