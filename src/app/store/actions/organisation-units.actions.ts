import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';

export const loadOrgnisationUnitsSuccess = createAction(
  '[ORGANISATION UNIT] Load Organisation Units Success',
  props<{ organisationUnits: Array<{ id: string }> }>()
);
export const loadOrgnisationUnitsFail = createAction(
  '[ORGANISATION UNIT] Load Organisation Units Fail',
  props<{ error: ErrorMessage }>()
);

export const clearOrganisationUnit = createAction(
  '[ORGANISATION UNIT] Clear Organisation units'
);
