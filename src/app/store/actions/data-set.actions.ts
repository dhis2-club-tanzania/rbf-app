import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { DataSets } from 'src/app/core/models/data-set.model';

export const getDataSet = createAction(
  '[DATA SET] Get dataSet',
  props<{ form: string }>()
);
export const getDataSetFail = createAction(
  '[DATA SET] Get dataSet Fail',
  props<{ error: ErrorMessage }>()
);
export const createDefaultDataSet = createAction(
  '[DATA SET] Create Default data set',
  props<{ dataSet: DataSets }>()
);
export const getDataSetSuccess = createAction('[DATA SET] Get dataSet Success');
