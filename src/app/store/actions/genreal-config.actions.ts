import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';

export const loadGeneralConfigurations = createAction(
  '[CONFIGURATIONS] Load general configuration'
);

export const loadGeneralConfigurationsSucess = createAction(
  '[CONFIGURATIONS] Load general configuration Success',
  props<{ configurations: any }>()
);

export const loadGeneralConfigurationsFail = createAction(
  '[CONFIGURATIONS] Load general configuration Fail',
  props<{ error: ErrorMessage }>()
);

export const addGeneralConfigurations = createAction(
  '[CONFIGURATION] Add General Configuration',
  props<{ configuration: any }>()
);

export const addGeneralConfigurationsFail = createAction(
  '[CONFIGURATION] Add General Configuration',
  props<{ error: ErrorMessage }>()
);

export const addGeneralConfigurationsSuccess = createAction(
  '[CONFIGURATION] Add General Configuration',
  props<{ configuration: any }>()
);

export const updateGeneralConfigurations = createAction(
  '[CONFIGURATION] update Configurations',
  props<{ configuration: any }>()
);
export const updateGeneralConfigurationsFail = createAction(
  '[CONFIGURATION] update Configurations',
  props<{ error: ErrorMessage }>()
);
export const updateGeneralConfigurationsSuccess = createAction(
  '[CONFIGURATION] update Configurations',
  props<{ configuration: any }>()
);
