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
    // loadChildren: './pages/assessment/assessment.module#AssessmentModule'
    loadChildren: () =>
      import('./pages/assessment/assessment.module').then(
        module => module.AssessmentModule
      )
  },
  {
    path: 'budget',
    // loadChildren: './pages/budget/budget.module#BudgetModule'
    loadChildren: () =>
      import('./pages/budget/budget.module').then(module => module.BudgetModule)
  },
  {
    path: 'verification',
    // loadChildren: './pages/verification/verification.module#VerificationModule'
    loadChildren: () =>
      import('./pages/verification/verification.module').then(
        module => module.VerificationModule
      )
  },
  {
    path: 'report',
    // loadChildren: './pages/report/report.module#ReportModule'
    loadChildren: () =>
      import('./pages/report/report.module').then(module => module.ReportModule)
  },
  {
    path: 'configuration',
    // loadChildren:
    //   './pages/configuration/configuration.module#ConfigurationModule'
    loadChildren: () =>
      import('./pages/configuration/configuration.module').then(
        module => module.ConfigurationModule
      )
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
