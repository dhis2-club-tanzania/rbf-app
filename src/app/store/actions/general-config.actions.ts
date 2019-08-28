import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { GeneralConfiguration } from 'src/app/pages/configuration/models/general-configuration.model';
import { Update } from '@ngrx/entity';

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
  props<{ configuration: GeneralConfiguration }>()
);

export const addGeneralConfigurationsFail = createAction(
  '[CONFIGURATION] Add General Configurationn Fail',
  props<{ error: ErrorMessage }>()
);

export const addGeneralConfigurationsSuccess = createAction(
  '[CONFIGURATION] Add General Configuration Success',
  props<{ configuration: GeneralConfiguration }>()
);

export const updateGeneralConfigurations = createAction(
  '[CONFIGURATION] update Configurations',
  props<{ configuration: GeneralConfiguration }>()
);
export const updateGeneralConfigurationsFail = createAction(
  '[CONFIGURATION] update Configurations Fail',
  props<{ error: ErrorMessage }>()
);
export const updateGeneralConfigurationsSuccess = createAction(
  '[CONFIGURATION] update Configurations Success',
  props<{ configuration: Update<GeneralConfiguration> }>()
);
