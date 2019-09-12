import { Injectable } from '@angular/core';
import { FormDataService } from 'src/app/core/services/form-data.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addFormDatavalues,
  addFormDatavaluesSuccess,
  addFormDatavaluesFail
} from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { FormDataValue } from 'src/app/core/models/form-data.model';
import { of } from 'rxjs';

@Injectable()
export class FormDataEffects {
  constructor(
    private formDataService: FormDataService,
    private actions$: Actions
  ) {}

  addFormDataValues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFormDatavalues),
      mergeMap(action =>
        this.formDataService.sendFormDataValue(action.payload).pipe(
          map(() => {
            const dataValue: FormDataValue = {
              id: `${action.payload.dataElement}-${action.payload.categoryOptionCombo}`,
              val: action.payload.value,
              com: 'false'
            };
            return addFormDatavaluesSuccess({ formDataValues: dataValue });
          }),
          catchError(error => of(addFormDatavaluesFail({ error: error })))
        )
      )
    )
  );
}
