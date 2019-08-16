import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  addSystemInfo,
  loadConfigurationsSuccess,
  loadConfigurationsFail,
  updateConfiguration,
  updateConfigurationSuccess
} from '../actions';
import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';

@Injectable()
export class ConfigurationEffects {
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions
  ) {}

  // loadingConfigurations$ = createEffect(() =>
  //   this.actions$.pipe(ofType(addSystemInfo))
  // );

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
      catchError(error => of(loadConfigurationsFail({ error: error })))
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
}
