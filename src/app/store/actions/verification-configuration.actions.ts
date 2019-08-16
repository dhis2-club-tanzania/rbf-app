import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
export const loadVerificationConfigurations = createAction(
  '[CONFIGURATION] Load Configuration'
);
export const loadVerificationConfigurationsFail = createAction(
  '[CONFIGURATION] Load Verification Configuration fail',
  props<{ error: ErrorMessage }>()
);
export const loadVerificationConfigurationsSuccess = createAction(
  '[CONFIGURATION] Load Verification Configuration success',
  props<{ configuration: VerificationConfiguration[] }>()
);

export const updateVerificationConfigurations = createAction(
  '[CONFIGURATION] Update Verification Configurations',
  props<{ configuration: VerificationConfiguration[] }>()
);
export const updateVerificationConfigurationsSuccess = createAction(
  '[CONFIGURATION] Update Verification Configurations',
  props<{ configuration: VerificationConfiguration[] }>()
);
export const updateVerificationConfigurationsFail = createAction(
  '[CONFIGURATION] Update Verification Configurations',
  props<{ error: ErrorMessage }>()
);

export const addDefaultVerificationConfigurations = createAction(
  '[CONFIGURATION] add Default Verification Configuration'
);
