import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';
import {
  addSystemInfo,
  loadVerificationConfigurationsSuccess,
  addDefaultVerificationConfigurations,
  loadVerificationConfigurationsFail,
  updateVerificationConfigurations,
  updateVerificationConfigurationsFail,
  updateVerificationConfigurationsSuccess
} from '../actions';

@Injectable()
export class VerificationConfigurationEffects {
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions
  ) {}

  loadConfiguratons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.configServices.getConfiguration('verification').pipe(
          map(configurations =>
            loadVerificationConfigurationsSuccess({
              configuration: configurations
            })
          )
        )
      ),
      catchError(error => {
        if (error.status === 404) {
          return of(addDefaultVerificationConfigurations());
        } else {
          of(loadVerificationConfigurationsFail({ error: error }));
        }
      })
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVerificationConfigurations),
      switchMap((action: any) =>
        this.configServices
          .updateConfiguration('verification', action.configuration)
          .pipe(
            map(configurations =>
              updateVerificationConfigurationsSuccess({
                configuration: configurations
              })
            )
          )
      ),
      catchError(error =>
        of(updateVerificationConfigurationsFail({ error: error }))
      )
    )
  );

  addDefaultConfiguration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDefaultVerificationConfigurations),
      switchMap(() =>
        this.configServices
          .createDefaultConfig('verification')
          .pipe(
            map(config =>
              loadVerificationConfigurationsSuccess({ configuration: config })
            )
          )
      ),
      catchError(error =>
        of(loadVerificationConfigurationsFail({ error: error }))
      )
    )
  );
}
