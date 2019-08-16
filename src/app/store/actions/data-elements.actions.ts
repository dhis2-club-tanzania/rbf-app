import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { DataElementList } from 'src/app/pages/configuration/models/data-element.model';

export const loadDataElements = createAction(
  '[DATA ELEMENTS] load Data Elements'
);

export const loadDataElementsSuccess = createAction(
  '[DATA ELEMENTS] load Data Elements success',
  props<{ dataElements: DataElementList[] }>()
);

export const loadDataElementsFail = createAction(
  '[DATA ELEMENTS] load data Elements fail',
  props<{ error: ErrorMessage }>()
);
