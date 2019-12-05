import { createAction, props } from '@ngrx/store';
import { SelectionFilterData } from 'src/app/pages/verification/models/selection-filter-data.model';

export const loadSelectionFilterData = createAction(
  '[SELECTION FILTER] load data selections',
  props<{ data: SelectionFilterData }>()
);
