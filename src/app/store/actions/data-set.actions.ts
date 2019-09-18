import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { DataSets } from 'src/app/core/models/data-set.model';

export const getVerificationDataSet = createAction(
  '[DATA SET] Get Verification dataSet'
);

export const getAssessmentDataSet = createAction(
  '[DATA SET] Get Assessment dataSet'
);

export const getDataSetFail = createAction(
  '[DATA SET] Get dataSet Fail',
  props<{ error: ErrorMessage }>()
);

export const getDataSetSuccess = createAction('[DATA SET] Get dataSet Success');

export const createDefaultDataSet = createAction(
  '[DATA SET] Create Default data set',
  props<{ dataSet: DataSets }>()
);
