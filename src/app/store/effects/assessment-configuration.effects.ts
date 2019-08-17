import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';
import {
  addSystemInfo,
  addDefaultVerificationConfigurations,
  loadAssessmentConfigurationsSuccess,
  addDefaultAssessmenConfiguration,
  loadAssessmentConfigurationsFail,
  updateAssessmenConfiguration,
  updateAssessmentConfigurationSuccess,
  updateAssessmenConfigurationFail
} from '../actions';

@Injectable()
export class AssessmentConfigurationEffects {
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions
  ) {}

  // loadConfiguratons$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(addSystemInfo),
  //     switchMap(() =>
  //       this.configServices.getConfiguration('assessment').pipe(
  //         map(configurations =>
  //           loadAssessmentConfigurationsSuccess({
  //             configuration: configurations
  //           })
  //         )
  //       )
  //     ),
  //     catchError(error => {
  //       if (error.status === 404) {
  //         return of(addDefaultAssessmenConfiguration());
  //       } else {
  //         of(loadAssessmentConfigurationsFail({ error: error }));
  //       }
  //     })
  //   )
  // );

  // updateConfigurations$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(updateAssessmenConfiguration),
  //     switchMap((action: any) =>
  //       this.configServices
  //         .updateConfiguration('assessment', action.configuration)
  //         .pipe(
  //           map(configurations =>
  //             updateAssessmentConfigurationSuccess({
  //               configuration: configurations
  //             })
  //           )
  //         )
  //     ),
  //     catchError(error =>
  //       of(updateAssessmenConfigurationFail({ error: error }))
  //     )
  //   )
  // );

  // addDefaultConfiguration$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(addDefaultVerificationConfigurations),
  //     switchMap(() =>
  //       this.configServices
  //         .createDefaultConfig('assessment')
  //         .pipe(
  //           map(config =>
  //             loadAssessmentConfigurationsSuccess({ configuration: config })
  //           )
  //         )
  //     ),
  //     catchError(error =>
  //       of(loadAssessmentConfigurationsFail({ error: error }))
  //     )
  //   )
  // );
}
