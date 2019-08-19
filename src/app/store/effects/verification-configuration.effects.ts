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
  addVerificationConfigurationFail
} from '../actions';

@Injectable()
export class VerificationConfigurationEffects {
  datastoreNamespace: string;
  constructor(
    private configServices: ConfigurationService,
    private actions$: Actions
  ) {
    this.datastoreNamespace = 'RBF-verification-config';
  }

  loadConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      mergeMap(() =>
        this.configServices
          .getConfigurations(this.datastoreNamespace)
          .pipe(
            map(config =>
              loadVerificationConfigurationSuccess({ configurations: config })
            )
          )
      ),
      catchError(error =>
        of(loadVerificationConfigurationFail({ error: error }))
      )
    )
  );

  addConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addVerificationConfiguration),
      mergeMap(action =>
        this.configServices
          .createConfiguration(this.datastoreNamespace, action.configuration)
          .pipe(
            map(() =>
              addVerificationConfigurationSuccess({
                configuration: action.configuration
              })
            )
          )
      ),
      catchError(error =>
        of(addVerificationConfigurationFail({ error: error }))
      )
    )
  );

  deleteConfigurations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteVerificationConfiguration),
      mergeMap(action =>
        this.configServices
          .deleteConfiguration(this.datastoreNamespace, action.id)
          .pipe(
            map(() => deleteVerificationConfigurationSuccess({ id: action.id }))
          )
      ),
      catchError(error =>
        of(deleteVerificationConfigurationFail({ error: error }))
      )
    )
  );

  // updateConfigurations$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(updateVerificationConfiguration),
  //     mergeMap(action =>
  //       this.configServices.updateConfiguration(
  //         this.datastoreNamespace,
  //         action.configuration.id,
  //         action.configuration
  //       ).pipe(map(()=> updateVerificationConfigurationSuccess({configuration: action.configuration})))
  //     ),
  //     catchError((error) => of(updateVerificationConfigurationFail(error)))
  //   )
  // );
}
