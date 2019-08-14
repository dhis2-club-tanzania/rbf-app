import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BudgetComponent } from './pages/budget/budget.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ReportComponent } from './pages/report/report.component';
import { VerificationComponent } from './pages/verification/verification.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'assessment'},
  { path: 'budget', component: BudgetComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'report', component: ReportComponent },
  { path: 'verification', component: VerificationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
