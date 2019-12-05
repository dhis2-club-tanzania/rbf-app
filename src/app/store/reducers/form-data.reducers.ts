import { createReducer, on } from '@ngrx/store';
import { initialFormDataState, FormDataState } from '../states/form-data.state';
import {
  loadFormDataValues,
  loadFormDataValuesFail,
  loadFormDataValuesSuccess,
  addFormDatavalues,
  addFormDatavaluesFail,
  addFormDatavaluesSuccess
} from '../actions';
import {
  loadingBaseState,
  errorBaseState,
  loadedBaseState
} from '../states/base.state';
import { adapter } from '../states/form-data.state';

export const reducer = createReducer(
  initialFormDataState,
  on(loadFormDataValues, state => ({ ...state, ...loadingBaseState })),
  on(loadFormDataValuesFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(loadFormDataValuesSuccess, (state, { formDataValues }) =>
    adapter.addMany(formDataValues, { ...state, ...loadedBaseState })
  ),
  on(addFormDatavalues, state => ({ ...state, adding: true, added: false })),
  on(addFormDatavaluesFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    adding: false,
    error
  })),
  on(addFormDatavaluesSuccess, (state, { formDataValues }) =>
    adapter.addOne(formDataValues, { ...state, added: true, adding: false })
  )
);

export function formDataReducer(state, action): FormDataState {
  return reducer(state, action);
}
