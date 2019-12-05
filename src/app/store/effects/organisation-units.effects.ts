import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrganisationUnitService } from 'src/app/shared/services/organisation-unit.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import {
  loadGeneralConfigurationsSucess,
  updateGeneralConfigurationsSuccess,
  loadOrgnisationUnitsSuccess,
  loadOrgnisationUnitsFail,
  clearOrganisationUnit
} from '../actions';
import { withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';
import { getOrganisationUnitLevel } from '../selectors';
import { ErrorMessage } from 'src/app/core';
import { of } from 'rxjs';

@Injectable()
export class OrganisationUnitEffects {
  constructor(
    private actions$: Actions,
    private organisationUnitServices: OrganisationUnitService,
    private store: Store<State>
  ) {}

  loadOrganisationUnits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGeneralConfigurationsSucess, clearOrganisationUnit),
      withLatestFrom(this.store.select(getOrganisationUnitLevel)),
      switchMap(([action, level]) =>
        this.organisationUnitServices.getOrganisationUnits(level).pipe(
          map(resp =>
            loadOrgnisationUnitsSuccess({
              organisationUnits: resp.organisationUnits
            })
          ),
          catchError((error: ErrorMessage) =>
            of(loadOrgnisationUnitsFail({ error: error }))
          )
        )
      )
    )
  );

  clearOrganisationUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateGeneralConfigurationsSuccess),
      map(() => clearOrganisationUnit())
    )
  );
}
