import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers/index';
import {
  selectAllFormDataValues,
  FormDataState,
} from '../states/form-data.state';

export const getFormDataValuesState = createSelector(
  getRootState,
  (state: State) => state.formData
);

export const getAllFormDataValues = createSelector(
  getFormDataValuesState,
  selectAllFormDataValues
);

export const getFormDataLoading = createSelector(
  getFormDataValuesState,
  (state: FormDataState) => state.loading
);

export const getFormDataLoaded = createSelector(
  getFormDataValuesState,
  (state: FormDataState) => state.loaded
);
