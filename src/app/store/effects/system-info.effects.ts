import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { getSanitizedSystemInfo } from '../../core';
import { addSystemInfo, loadSystemInfo, loadSystemInfoFail } from '../actions';

@Injectable()
export class SystemInfoEffects {
  constructor(
    private actions$: Actions,
    private httpClient: NgxDhis2HttpClientService
  ) {}

  loadSystemInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSystemInfo),
      switchMap(() =>
        this.httpClient.systemInfo().pipe(
          map((systemInfoResponse: any) =>
            addSystemInfo({
              systemInfo: getSanitizedSystemInfo(systemInfoResponse)
            })
          ),
          catchError((error: any) => of(loadSystemInfoFail({ error })))
        )
      )
    )
  );

  init$ = createEffect(() => defer(() => of(loadSystemInfo())));
}
