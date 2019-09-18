import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataSetService } from 'src/app/shared/services/data-set.service';
import {
  getAssessmentDataSet,
  getVerificationDataSet,
  getDataSetSuccess,
  getDataSetFail
} from '../actions/data-set.actions';
import { switchMap, withLatestFrom, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import {
  getAssessmentDataSetId,
  getVerificationDataSetId
} from '../selectors/general-configuration.selectors';
import { ErrorMessage } from '@iapps/ngx-dhis2-http-client';
import { of } from 'rxjs';

@Injectable()
export class DataSetEffects {
  constructor(
    private actions$: Actions,
    private dataSetService: DataSetService,
    private store: Store<State>
  ) {}

  getAssessmentDataSet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAssessmentDataSet),
      withLatestFrom(this.store.select(getAssessmentDataSetId)),
      switchMap(([action, id]) => {
        return this.dataSetService.checkDataSet(id).pipe(
          map(() => getDataSetSuccess()),
          catchError((error: ErrorMessage) => {
            if (error.status === 404) {
              return of(getDataSetFail({ error: error }));
            }
            return of(getDataSetFail({ error: error }));
          })
        );
      })
    )
  );

  getVerificationDataSet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVerificationDataSet),
      withLatestFrom(this.store.select(getVerificationDataSetId)),
      switchMap(([action, id]) => {
        return this.dataSetService.checkDataSet(id).pipe(
          map(() => getDataSetSuccess()),
          catchError((error: ErrorMessage) => {
            if (error.status === 400) {
              return;
            }
            return of(getDataSetFail({ error: error }));
          })
        );
      })
    )
  );
}
