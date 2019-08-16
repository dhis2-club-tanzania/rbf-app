import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { Configuration } from 'src/app/pages/configuration/models/configuration.model';
export const loadConfigurations = createAction(
  '[CONFIGURATION] Load Configuration'
);
export const loadConfigurationsFail = createAction(
  '[CONFIGURATION] Load Configuration fail',
  props<{ error: ErrorMessage }>()
);
export const loadConfigurationsSuccess = createAction(
  '[CONFIGURATION] Load Configuration success',
  props<{ configuration: Configuration }>()
);

export const updateConfiguration = createAction(
  '[CONFIGURATION] Update Configurations',
  props<{ configuration: Configuration }>()
);
export const updateConfigurationSuccess = createAction(
  '[CONFIGURATION] Update Configurations',
  props<{ configuration: Configuration }>()
);
export const updateConfigurationFail = createAction(
  '[CONFIGURATION] Update Configurations',
  props<{ error: ErrorMessage }>()
);

export const addDefaultConfiguration = createAction(
  '[CONFIGURATION] add Default Configuration'
);
