import { Injectable } from '@angular/core';
import { DataElementsService } from 'src/app/shared/services/data-elements.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { addSystemInfo } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  loadDataElementsSuccess,
  loadDataElementsFail
} from '../actions/data-elements.actions';
import { of } from 'rxjs';

@Injectable()
export class DataElementsEffect {
  constructor(
    private dataElementsService: DataElementsService,
    private actions$: Actions
  ) {}

  loadDataElements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addSystemInfo),
      switchMap(() =>
        this.dataElementsService.getDataElements().pipe(
          map(dataElementsObject =>
            loadDataElementsSuccess({
              dataElements: dataElementsObject.dataElements
            })
          )
        )
      ),
      catchError(error => of(loadDataElementsFail({ error: error })))
    )
  );
}
