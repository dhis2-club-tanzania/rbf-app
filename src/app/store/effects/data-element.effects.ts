import { Injectable } from '@angular/core';
import { DataElementsService } from 'src/app/shared/services/data-elements.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import * as _ from 'lodash';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  loadDataElementsSuccess,
  loadDataElementsFail
} from '../actions/data-elements.actions';
import { addSystemInfo } from '../actions';
import { getSanitizedDataElementsLits } from 'src/app/core/helpers/get-sanitized-data-elements-list.helper';

@Injectable()
export class DataElementsEffects {
  constructor(
    private dataElementsService: DataElementsService,
    private actions$: Actions
  ) {}

  loadDataElements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.dataElementsService.getDataElements().pipe(
          map(dataElementsObject => {
            const dataElements = getSanitizedDataElementsLits(
              dataElementsObject
            );
            return loadDataElementsSuccess({
              dataElements: dataElements
            });
          })
        )
      ),
      catchError(error => of(loadDataElementsFail({ error: error })))
    )
  );
}
