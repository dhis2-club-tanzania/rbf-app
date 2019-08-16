import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { DataElementsState } from '../states/data-elements.state';

export const getDataElementsState = createSelector(
  getRootState,
  (state: State) => state.dataElements
);

export const getAllDataElements = createSelector(
  getDataElementsState,
  (state: DataElementsState) => state.dataElements
);
