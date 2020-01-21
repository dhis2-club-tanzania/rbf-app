import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';
import {
  addSystemInfo,
  loadVerificationConfigurationSuccess,
  loadVerificationConfigurationFail,
  updateVerificationConfiguration,
  updateVerificationConfigurationFail,
  updateVerificationConfigurationSuccess,
  deleteVerificationConfigurationFail,
  deleteVerificationConfigurationSuccess,
  deleteVerificationConfiguration,
  addVerificationConfiguration,
  addVerificationConfigurationSuccess,
  addVerificationConfigurationFail,
} from '../actions';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class VerificationConfigurationEffects {
  datastoreNamespace: string;
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions,
    private _snackBar: MatSnackBar
  ) {
    this.datastoreNamespace = 'rbf-verification-config';
  }

  loadConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.configServices
          .getConfigurations(this.datastoreNamespace)
          .pipe(
            map(config =>
              loadVerificationConfigurationSuccess({ configurations: config })
            )
          )
      ),
      catchError(error => {
        this._snackBar.open('Loading Verification Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(loadVerificationConfigurationFail({ error: error }));
      })
    )
  );

  addConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVerificationConfiguration),
      mergeMap(action => {
        this._snackBar.open('Adding Verification Configuration', '', {
          duration: 1000,
        });
        return this.configServices
          .createConfigurationWithDataElement(
            this.datastoreNamespace,
            action.configuration
          )
          .pipe(
            map(response => {
              this._snackBar.open(
                'Adding Verification Configuration',
                'SUCCESS',
                {
                  duration: 1000,
                }
              );
              return addVerificationConfigurationSuccess({
                configuration: { ...action.configuration, id: response['id'] },
              });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Adding Verification Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(addVerificationConfigurationFail({ error: error }));
      })
    )
  );

  deleteConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteVerificationConfiguration),
      mergeMap(action => {
        this._snackBar.open('Deleting Verification Configuration', '', {
          duration: 1000,
        });
        return this.configServices
          .deleteConfigurationWithDataElement(
            this.datastoreNamespace,
            action.id
          )
          .pipe(
            map(() => {
              this._snackBar.open(
                'Deleting Verification Configuration',
                'SUCCESS',
                {
                  duration: 1000,
                }
              );
              return deleteVerificationConfigurationSuccess({ id: action.id });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Deleting Verification Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(deleteVerificationConfigurationFail({ error: error }));
      })
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateVerificationConfiguration),
      mergeMap(action => {
        this._snackBar.open('Updating Verification Configuration', '', {
          duration: 1000,
        });
        return this.configServices
          .updateConfigurationWithDataElement(
            this.datastoreNamespace,
            action.configuration.id,
            action.configuration
          )
          .pipe(
            map(() => {
              this._snackBar.open(
                'Updating Verification Configuration',
                'SUCCESS',
                {
                  duration: 1000,
                }
              );
              return updateVerificationConfigurationSuccess({
                configuration: {
                  id: action.configuration.id,
                  changes: action.configuration,
                },
              });
            })
          );
      }),
      catchError(error => {
        {
          this._snackBar.open('Updating Verification Configuration', 'FAIL', {
            duration: 1000,
          });
          return of(updateVerificationConfigurationFail(error));
        }
      })
    )
  );
}
