import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { AssessmentComponent } from './pages/assessment/assessment.component';
// import { VerificationComponent } from './pages/verification/verification.component';
// import { BudgetComponent } from './pages/budget/budget.component';
// import { ReportComponent } from './pages/report/report.component';
// import { ConfigurationComponent } from './pages/configuration/configuration.component';

export const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'assessment'
//   },
//   {
//     path: 'assessment',
//     component: AssessmentComponent
//   },
//   { path: 'verification', component: VerificationComponent },
//   { path: 'budget', component: BudgetComponent },
//   { path: 'report', component: ReportComponent },
//   { path: 'configuration', component: ConfigurationComponent}
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
