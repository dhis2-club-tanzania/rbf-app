import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ErrorMessage } from 'src/app/core';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';

export const loadAssessmentConfigurations = createAction(
  '[CONFIGURATION] Load Assessment Configuration'
);
export const loadAssessmentConfigurationFail = createAction(
  '[CONFIGURATION] Load Assessment Configuration fail',
  props<{ error: ErrorMessage }>()
);
export const loadAssessmentConfigurationSuccess = createAction(
  '[CONFIGURATION] Load Assessment Configuration success',
  props<{ configurations: any[] }>()
);

export const addAssessmentConfiguration = createAction(
  '[CONFIGURATION] add Assessment Configuration',
  props<{ configuration: AssessmentConfiguration }>()
);
export const addAssessmentConfigurationSuccess = createAction(
  '[CONFIGURATION] add Assessment Configuration Success',
  props<{ configuration: AssessmentConfiguration }>()
);
export const addAssessmentConfigurationFail = createAction(
  '[CONFIGURATION] add Assessment Configuration Fail',
  props<{ error: ErrorMessage }>()
);

export const updateAssessmentConfiguration = createAction(
  '[CONFIGURATION] Update Assessment Configurations',
  props<{ configuration: AssessmentConfiguration }>()
);
export const updateAssessmentConfigurationSuccess = createAction(
  '[CONFIGURATION] Update Assessment Configurations Success',
  props<{ configuration: Update<AssessmentConfiguration> }>()
);
export const updateAssessmentConfigurationFail = createAction(
  '[CONFIGURATION] Update Assessment Configurations Fail',
  props<{ error: ErrorMessage }>()
);

export const deleteAssessmentConfiguration = createAction(
  '[CONFIGURATION] Delete Assessment Configuration',
  props<{ id: string }>()
);

export const deleteAssessmentConfigurationSuccess = createAction(
  '[CONFIGURATION] Delete Assessment Configuration Success',
  props<{ id: string }>()
);

export const deleteAssessmentConfigurationFail = createAction(
  '[CONFIGURATION] Delete Assessment Configuration Fail',
  props<{ error: ErrorMessage }>()
);
