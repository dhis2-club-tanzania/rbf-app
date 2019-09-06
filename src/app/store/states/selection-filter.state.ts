import { SelectionFilterData } from 'src/app/pages/verification/models/selection-filter-data.model';

export interface SelectionFilterState {
  selectionFilterData: SelectionFilterData;
  loaded: boolean;
}

export const initialSelectionFilterState = {
  selectionFilterData: null,
  loaded: false
};

export const getSelectionFilterState = (state: SelectionFilterState) =>
  state.selectionFilterData;
