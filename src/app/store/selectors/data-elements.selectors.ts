import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';
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

export const getSelectedCategoryCombo = de =>
  createSelector(
    getAllDataElements,
    dataElements => {
      const dataElement = _.find(dataElements, value => value.id === de);
      return dataElement.categoryCombo;
    }
  );
