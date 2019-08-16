import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './components/verification/verification.component';
import { RoutingModule } from './verification.routes';

@NgModule({
  declarations: [VerificationComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class VerificationModule { }
