import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ConfigurationService } from 'src/app/pages/configuration/services/configuration.service';
import {
  addSystemInfo,
  loadAssessmentConfigurationSuccess,
  loadAssessmentConfigurationFail,
  updateAssessmentConfiguration,
  updateAssessmentConfigurationSuccess,
  updateAssessmentConfigurationFail,
  addAssessmentConfiguration,
  addAssessmentConfigurationSuccess,
  addAssessmentConfigurationFail,
  deleteAssessmentConfiguration,
  deleteAssessmentConfigurationSuccess,
  deleteAssessmentConfigurationFail,
} from '../actions';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AssessmentConfigurationEffects {
  datastoreNamespace: string;
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions,
    private _snackBar: MatSnackBar
  ) {
    this.datastoreNamespace = 'rbf-assessment-config';
  }

  loadConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.configServices
          .getConfigurations(this.datastoreNamespace)
          .pipe(
            map(config =>
              loadAssessmentConfigurationSuccess({ configurations: config })
            )
          )
      ),
      catchError(error => {
        this._snackBar.open('Loading Assessment Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(loadAssessmentConfigurationFail({ error: error }));
      })
    )
  );

  addConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAssessmentConfiguration),
      mergeMap(action => {
        this._snackBar.open('Adding Assessment Configuration', '', {
          duration: 1000,
        });
        return this.configServices
          .createConfigurationWithDataElement(
            this.datastoreNamespace,
            action.configuration
          )
          .pipe(
            map(() => {
              this._snackBar.open('Adding Configuration', 'SUCCESS', {
                duration: 1000,
              });
              return addAssessmentConfigurationSuccess({
                configuration: action.configuration,
              });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Adding Assessment Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(addAssessmentConfigurationFail({ error: error }));
      })
    )
  );

  deleteConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAssessmentConfiguration),
      mergeMap(action => {
        this._snackBar.open('Deleting Assessment Configuration', '', {
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
                'Deleting Assessment Configuration',
                'SUCCESS',
                {
                  duration: 1000,
                }
              );
              return deleteAssessmentConfigurationSuccess({ id: action.id });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Deleting Assessment Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(deleteAssessmentConfigurationFail({ error: error }));
      })
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAssessmentConfiguration),
      mergeMap(action => {
        this._snackBar.open('Updating Assessment Configuration', 'FAIL', {
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
                'Updating Assessment Configuration',
                'SUCCESS',
                {
                  duration: 1000,
                }
              );
              return updateAssessmentConfigurationSuccess({
                configuration: {
                  id: action.configuration.id,
                  changes: action.configuration,
                },
              });
            })
          );
      }),
      catchError(error => {
        this._snackBar.open('Updating Assessment Configuration', 'FAIL', {
          duration: 1000,
        });
        return of(updateAssessmentConfigurationFail(error));
      })
    )
  );
}
