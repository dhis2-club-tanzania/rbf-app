import { createReducer, on } from '@ngrx/store';
import {
  initialSelectionFilterState,
  SelectionFilterState
} from '../states/selection-filter.state';
import { loadSelectionFilterData } from '../actions';

export const reducer = createReducer(
  initialSelectionFilterState,
  on(loadSelectionFilterData, (state, { data }) => ({
    ...state,
    selectionFilterData: data,
    loaded: true
  }))
);

export function selectionFilterReducer(state, action): SelectionFilterState {
  return reducer(state, action);
}
