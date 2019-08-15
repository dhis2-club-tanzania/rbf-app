import { createAction, props } from '@ngrx/store';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { ErrorMessage } from 'src/app/core';

export const loadAssessmentConfigSuccess = createAction(
  '[VERIFICATION CONFIG] load Verification configuration success',
  props<{ assessmentConfig: VerificationConfiguration }>()
);

export const loadAssessmentConfigFail = createAction(
  '[VERIFICATION CONFIG] load Verification configuration success',
  props<{ assessmentConfig: VerificationConfiguration }>()
);

export const AddAssessmentConfig = createAction(
  '[VERIFICATION CONFIG] add Verification configuration',
  props<{ config: VerificationConfiguration[] }>()
);

export const AddAssessmentConfigSuccess = createAction(
  '[VERIFICATION CONFIG] add Verification configuration success',
  props<{ config: VerificationConfiguration[] }>()
);

export const AddAssessmentConfigFail = createAction(
  '[VERIFICATION CONFIG] add Verification configuration',
  props<{ error: ErrorMessage }>()
);
