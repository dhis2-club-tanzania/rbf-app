import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule
  ],
  exports: [BudgetComponent]
})
export class BudgetModule { }
