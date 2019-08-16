import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './components/budget/budget.component';
import { RoutingModule } from './budget.routes';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class BudgetModule { }
