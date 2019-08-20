import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { RoutingModule } from './report.routes';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class ReportModule { }
