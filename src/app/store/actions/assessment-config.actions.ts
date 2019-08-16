import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';
export const loadAssessmentConfigurations = createAction(
  '[CONFIGURATION] Load Configuration'
);
export const loadAssessmentConfigurationsFail = createAction(
  '[CONFIGURATION] Load Assessment Configuration fail',
  props<{ error: ErrorMessage }>()
);
export const loadAssessmentConfigurationsSuccess = createAction(
  '[CONFIGURATION] Load Assessment Configuration success',
  props<{ configuration: AssessmentConfiguration[] }>()
);

export const updateAssessmenConfiguration = createAction(
  '[CONFIGURATION] Update Assessment Configurations',
  props<{ configuration: AssessmentConfiguration[] }>()
);
export const updateAssessmentConfigurationSuccess = createAction(
  '[CONFIGURATION] Update Assessment Configurations',
  props<{ configuration: AssessmentConfiguration[] }>()
);
export const updateAssessmenConfigurationFail = createAction(
  '[CONFIGURATION] Update Assessment Configurations',
  props<{ error: ErrorMessage }>()
);

export const addDefaultAssessmenConfiguration = createAction(
  '[CONFIGURATION] add Default Assessment Configuration'
);
