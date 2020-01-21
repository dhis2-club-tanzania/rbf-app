import { BaseState, initialBaseState } from './base.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FormDataValue } from 'src/app/shared/models/form-data.model';

export interface FormDataState extends BaseState, EntityState<FormDataValue> {
  adding: boolean;
  added: boolean;
}

export function selectDataId(fromDataValue: FormDataValue) {
  return fromDataValue.id;
}

export const adapter: EntityAdapter<FormDataValue> = createEntityAdapter({
  sortComparer: false,
  selectId: selectDataId,
});

export const initialFormDataState: FormDataState = adapter.getInitialState({
  ...initialBaseState,
  added: false,
  adding: false,
});

export const {
  selectAll: selectAllFormDataValues,
  selectIds: selectFormDataValuesIds,
  selectEntities: selectFormDataValuesEntities,
} = adapter.getSelectors();
