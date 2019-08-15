import { createAction, props } from '@ngrx/store';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';
import { ErrorMessage } from 'src/app/core';

export const loadAssessmentConfigSuccess = createAction(
  '[ASSESSMENT CONFIG] load Assessment configuration success',
  props<{ assessmentConfig: AssessmentConfiguration }>()
);

export const loadAssessmentConfigFail = createAction(
  '[ASSESSMENT CONFIG] load Assessment configuration success',
  props<{ assessmentConfig: AssessmentConfiguration }>()
);

export const AddAssessmentConfig = createAction(
  '[ASSESSMENT CONFIG] add Assessment configuration',
  props<{ config: AssessmentConfiguration[] }>()
);

export const AddAssessmentConfigSuccess = createAction(
  '[ASSESSMENT CONFIG] add Assessment configuration success',
  props<{ config: AssessmentConfiguration[] }>()
);

export const AddAssessmentConfigFail = createAction(
  '[ASSESSMENT CONFIG] add Assessment configuration',
  props<{ error: ErrorMessage }>()
);
