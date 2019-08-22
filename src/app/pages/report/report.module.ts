import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { RoutingModule } from './report.routes';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxDhis2SelectionFiltersModule } from '@iapps/ngx-dhis2-selection-filters';

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
export class ReportModule { }
