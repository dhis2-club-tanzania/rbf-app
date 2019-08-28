import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ErrorMessage } from 'src/app/core';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';

export const loadVerificationConfigurations = createAction(
  '[CONFIGURATION] Load Verification Configuration'
);
export const loadVerificationConfigurationFail = createAction(
  '[CONFIGURATION] Load Verification Configuration fail',
  props<{ error: ErrorMessage }>()
);
export const loadVerificationConfigurationSuccess = createAction(
  '[CONFIGURATION] Load Verification Configuration success',
  props<{ configurations: any[] }>()
);

export const addVerificationConfiguration = createAction(
  '[CONFIGURATION] add Verification Configuration',
  props<{ configuration: VerificationConfiguration }>()
);
export const addVerificationConfigurationSuccess = createAction(
  '[CONFIGURATION] add Verification Configuration Success',
  props<{ configuration: VerificationConfiguration }>()
);
export const addVerificationConfigurationFail = createAction(
  '[CONFIGURATION] add Verification Configuration Fail',
  props<{ error: ErrorMessage }>()
);
export const updateVerificationConfiguration = createAction(
  '[CONFIGURATION] Update Verification Configuration',
  props<{ configuration: any }>()
);
export const updateVerificationConfigurationSuccess = createAction(
  '[CONFIGURATION] Update Verification Configurations Success',
  props<{ configuration: Update<VerificationConfiguration> }>()
);
export const updateVerificationConfigurationFail = createAction(
  '[CONFIGURATION] Update Verification Configuration Fail',
  props<{ error: ErrorMessage }>()
);

export const deleteVerificationConfiguration = createAction(
  '[CONFIGURATION] delete Verification Configuration',
  props<{ id: string }>()
);
export const deleteVerificationConfigurationSuccess = createAction(
  '[CONFIGURATION] delete Verification Configuration success',
  props<{ id: string }>()
);
export const deleteVerificationConfigurationFail = createAction(
  '[CONFIGURATION] delete Verification Configuration fail',
  props<{ error: ErrorMessage }>()
);
