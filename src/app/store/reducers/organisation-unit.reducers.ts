import { createReducer, on } from '@ngrx/store';
import {
  initialOrganisationUnitState,
  adapter,
  OrganisationUnitsState
} from '../states/organisation-units.state';
import {
  loadOrgnisationUnitsFail,
  loadOrgnisationUnitsSuccess,
  clearOrganisationUnit
} from '../actions';
import { errorBaseState, loadedBaseState } from '../states/base.state';

export const reducer = createReducer(
  initialOrganisationUnitState,
  on(loadOrgnisationUnitsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(loadOrgnisationUnitsSuccess, (state, { organisationUnits }) =>
    adapter.addMany(organisationUnits, { ...state, ...loadedBaseState })
  ),
  on(clearOrganisationUnit, state => adapter.removeAll(state))
);

export function organisationUnitReducer(state, action): OrganisationUnitsState {
  return reducer(state, action);
}
