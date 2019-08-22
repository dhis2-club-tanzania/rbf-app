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
  deleteAssessmentConfigurationFail
} from '../actions';

@Injectable()
export class AssessmentConfigurationEffects {
  datastoreNamespace: string;
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions
  ) {
    this.datastoreNamespace = 'rbf-assessment-config';
  }

  loadConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      mergeMap(() =>
        this.configServices
          .getConfigurations(this.datastoreNamespace)
          .pipe(
            map(config =>
              loadAssessmentConfigurationSuccess({ configurations: config })
            )
          )
      ),
      catchError(error => of(loadAssessmentConfigurationFail({ error: error })))
    )
  );

  addConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAssessmentConfiguration),
      mergeMap(action =>
        this.configServices
          .createConfiguration(this.datastoreNamespace, action.configuration)
          .pipe(
            map(() =>
              addAssessmentConfigurationSuccess({
                configuration: action.configuration
              })
            )
          )
      ),
      catchError(error => of(addAssessmentConfigurationFail({ error: error })))
    )
  );

  deleteConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAssessmentConfiguration),
      mergeMap(action =>
        this.configServices
          .deleteConfiguration(this.datastoreNamespace, action.id)
          .pipe(
            map(() => deleteAssessmentConfigurationSuccess({ id: action.id }))
          )
      ),
      catchError(error =>
        of(deleteAssessmentConfigurationFail({ error: error }))
      )
    )
  );

  updateConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAssessmentConfiguration),
      mergeMap(action =>
        this.configServices
          .updateConfiguration(
            this.datastoreNamespace,
            action.configuration.id,
            action.configuration
          )
          .pipe(
            map(() =>
              updateAssessmentConfigurationSuccess({
                configuration: {
                  id: action.configuration.id,
                  changes: action.configuration
                }
              })
            )
          )
      ),
      catchError(error => of(updateAssessmentConfigurationFail(error)))
    )
  );
}
