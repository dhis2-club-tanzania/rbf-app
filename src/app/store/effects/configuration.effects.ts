import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  addSystemInfo,
  loadConfigurationsSuccess,
  loadConfigurationsFail,
  updateConfiguration,
  updateConfigurationSuccess,
  addDefaultConfiguration
} from '../actions';
import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';

@Injectable()
export class ConfigurationEffects {
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions
  ) {}

  loadConfiguratons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.configServices
          .getConfiguration()
          .pipe(
            map(configurations =>
              loadConfigurationsSuccess({ configuration: configurations })
            )
          )
      ),
      catchError(error => {
        if (error.status === 404) {
          return of(addDefaultConfiguration());
        } else {
          of(loadConfigurationsFail({ error: error }));
        }
      })
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateConfiguration),
      switchMap((action: any) =>
        this.configServices
          .updateConfiguration(action.configuration)
          .pipe(
            map(configurations =>
              updateConfigurationSuccess({ configuration: configurations })
            )
          )
      ),
      catchError(error => of(loadConfigurationsFail({ error: error })))
    )
  );

  addDefaultConfiguration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDefaultConfiguration),
      switchMap(() =>
        this.configServices
          .createDefaultConfig()
          .pipe(
            map(config => loadConfigurationsSuccess({ configuration: config }))
          )
      ),
      catchError(error => of(loadConfigurationsFail({ error: error })))
    )
  );
}
