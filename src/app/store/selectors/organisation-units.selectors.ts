import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { selectAllOrganisationUnits } from '../states/organisation-units.state';

export const getOrganisationUnitState = createSelector(
  getRootState,
  (state: State) => state.organisationUnit
);

export const getOrganisationUnits = createSelector(
  getOrganisationUnitState,
  selectAllOrganisationUnits
);
