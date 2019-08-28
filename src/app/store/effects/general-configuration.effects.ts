import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import {
  addSystemInfo,
  loadGeneralConfigurationsSucess,
  addGeneralConfigurations,
  addGeneralConfigurationsSuccess,
  addGeneralConfigurationsFail,
  updateGeneralConfigurations,
  updateGeneralConfigurationsFail,
  loadGeneralConfigurationsFail,
  updateGeneralConfigurationsSuccess
} from '../actions';
import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';

@Injectable()
export class GeneralConfigurationEffects {
  dataStoreNamespace: string;
  constructor(
    private actions$: Actions,
    private configService: ConfigurationService,
    private _snackBar: MatSnackBar
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
      catchError(error => {
        this._snackBar.open('Loading General Configuration', 'FAIL', {
          duration: 1000
        });
        return of(loadGeneralConfigurationsFail({ error: error }));
      })
    )
  );

  addConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addGeneralConfigurations),
      mergeMap(action => {
        this._snackBar.open('Adding General Configuration', '', {
          duration: 1000
        });
        return this.configService
          .createConfiguration(this.dataStoreNamespace, action.configuration)
          .pipe(
            map(() => {
              this._snackBar.open('Adding General Configuration', 'SUCCESS', {
                duration: 1000
              });
              return addGeneralConfigurationsSuccess({
                configuration: action.configuration
              });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Adding General Configuration', 'FAIL', {
          duration: 1000
        });
        return of(addGeneralConfigurationsFail({ error: error }));
      })
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateGeneralConfigurations),
      mergeMap(action => {
        this._snackBar.open('Updating General Configuration', '', {
          duration: 1000
        });
        return this.configService
          .updateConfiguration(
            this.dataStoreNamespace,
            action.configuration.id,
            action.configuration
          )
          .pipe(
            map(() => {
              this._snackBar.open('Updating General Configuration', 'SUCCESS', {
                duration: 1000
              });
              return updateGeneralConfigurationsSuccess({
                configuration: {
                  id: action.configuration.id,
                  changes: action.configuration
                }
              });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Updating General Configuration', 'FAIL', {
          duration: 1000
        });
        return of(updateGeneralConfigurationsFail({ error: error }));
      })
    )
  );
}
