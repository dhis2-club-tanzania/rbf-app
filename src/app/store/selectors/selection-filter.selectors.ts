import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import {
  selectSelectionFilterState,
  SelectionFilterState
} from '../states/selection-filter.state';
import { SelectionFilterData } from 'src/app/pages/verification/models/selection-filter-data.model';

export const getSelectionFilterDataState = createSelector(
  getRootState,
  (state: State) => state.selectionFilter
);

export const getSelectionFilterData = createSelector(
  getSelectionFilterDataState,
  selectSelectionFilterState
);

export const getSelectionFilterLoadedState = createSelector(
  getSelectionFilterDataState,
  (state: SelectionFilterState) => state.loaded
);

export const getSelectionFilterPeriod = createSelector(
  getSelectionFilterData,
  (data: SelectionFilterData) => (data.period ? data.period : null)
);

export const getSelectionFilterOrganisationUnit = createSelector(
  getSelectionFilterData,
  (data: SelectionFilterData) =>
    data.organisationUnit ? data.organisationUnit : ''
);
