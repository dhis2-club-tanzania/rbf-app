import { createReducer, on } from '@ngrx/store';
import {
  initialDataElementsState,
  DataElementsState
} from '../states/data-elements.state';
import {
  loadDataElementsSuccess,
  loadDataElementsFail
} from '../actions/data-elements.actions';
import { loadedBaseState, errorBaseState } from '../states/base.state';

export const reducer = createReducer(
  initialDataElementsState,
  on(loadDataElementsSuccess, (state, { dataElements }) => ({
    ...state,
    ...loadedBaseState,
    dataElements: dataElements
  })),
  on(loadDataElementsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  }))
);

export function dataElementsReducer(state, action): DataElementsState {
  return reducer(state, action);
}
