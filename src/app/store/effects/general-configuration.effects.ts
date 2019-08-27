import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';
import {
  addSystemInfo,
  loadGeneralConfigurationsSucess,
  addGeneralConfigurations,
  addGeneralConfigurationsSuccess,
  addGeneralConfigurationsFail,
  updateGeneralConfigurations,
  updateGeneralConfigurationsFail,
  loadGeneralConfigurationsFail
} from '../actions';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GeneralConfigurationEffects {
  dataStoreNamespace: string;
  constructor(
    private actions$: Actions,
    private configService: ConfigurationService
  ) {
    this.dataStoreNamespace = 'rbf-general-config';
  }

  loadConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.configService
          .getConfigurations(this.dataStoreNamespace)
          .pipe(
            map(config =>
              loadGeneralConfigurationsSucess({ configurations: config })
            )
          )
      ),
      catchError(error => of(loadGeneralConfigurationsFail({ error: error })))
    )
  );

  addConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addGeneralConfigurations),
      mergeMap(action =>
        this.configService
          .createConfiguration(this.dataStoreNamespace, action.configuration)
          .pipe(
            map(() =>
              addGeneralConfigurationsSuccess({
                configuration: action.configuration
              })
            )
          )
      ),
      catchError(error => of(addGeneralConfigurationsFail({ error: error })))
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateGeneralConfigurations),
      mergeMap(action =>
        this.configService.updateConfiguration(
          this.dataStoreNamespace,
          action.configuration.id,
          action.configuration
        )
      ),
      catchError(error => of(updateGeneralConfigurationsFail({ error: error })))
    )
  );
}
