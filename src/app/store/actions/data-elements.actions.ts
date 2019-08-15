import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';

export interface DataElement {
  id: string;
  name: string;
}

export const loadDataElements = createAction(
  '[DATA ELEMENTS] load Data Elements'
);

export const loadDataElementsSuccess = createAction(
  '[DATA ELEMENTS] load Data Elements success',
  props<{ dataElements: DataElement[] }>()
);

export const loadDataElementsFail = createAction(
  '[DATA ELEMENTS] load data Elements fail',
  props<{ error: ErrorMessage }>()
);
