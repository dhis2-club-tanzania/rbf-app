import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { RoutingModule } from './report.routes';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class ReportModule { }
