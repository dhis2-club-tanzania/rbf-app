import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'configuration'
  },
  {
    path: 'assessment',
    loadChildren: './pages/assessment/assessment.module#AssessmentModule'
  },
  {
    path: 'budget',
    loadChildren: './pages/budget/budget.module#BudgetModule'
  },
  {
    path: 'verification',
    loadChildren: './pages/verification/verification.module#VerificationModule'
  },
  {
    path: 'report',
    loadChildren: './pages/report/report.module#ReportModule'
  },
  {
    path: 'configuration',
    loadChildren: './pages/configuration/configuration.module#ConfigurationModule'
  }
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
