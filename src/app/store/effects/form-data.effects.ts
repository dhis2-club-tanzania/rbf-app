import { Injectable } from '@angular/core';
import { FormDataService } from 'src/app/shared/services/form-data.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addFormDatavalues,
  addFormDatavaluesSuccess,
  addFormDatavaluesFail,
} from '../actions';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { FormDataValue } from 'src/app/shared/models/form-data.model';
import { of } from 'rxjs';
import { State } from '../reducers/index';
import { Store } from '@ngrx/store';
import { getAssessmentDataSetId } from '../selectors/general-configuration.selectors';

@Injectable()
export class FormDataEffects {
  constructor(
    private formDataService: FormDataService,
    private actions$: Actions,
    private store: Store<State>
  ) {}

  addFormDataValues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFormDatavalues),
      withLatestFrom(this.store.select(getAssessmentDataSetId)),
      mergeMap(([action, dataSet]) => {
        const dataValues = {
          ...action.payload,
          dataSet: dataSet,
        };
        return this.formDataService.sendFormDataValue(dataValues).pipe(
          map(() => {
            const dataValue: FormDataValue = {
              // id: `${action.payload.dataElement}-${action.payload.categoryOptionCombo}`,
              id: action.payload.dataElement,
              val: action.payload.value,
              com: 'false',
            };
            return addFormDatavaluesSuccess({ formDataValues: dataValue });
          }),
          catchError(error => of(addFormDatavaluesFail({ error: error })))
        );
      })
    )
  );
}
