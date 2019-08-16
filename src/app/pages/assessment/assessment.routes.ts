import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';

export const routes: Routes = [
  {
    path: '',
    component: AssessmentComponent
  }
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}
