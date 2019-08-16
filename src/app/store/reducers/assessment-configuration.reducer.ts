import { createReducer, on } from '@ngrx/store';
import {
  initialConfigurationState,
  AssessmentConfigurationState
} from '../states/assessment-configuration.state';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import {
  loadAssessmentConfigurations,
  loadAssessmentConfigurationsSuccess,
  loadAssessmentConfigurationsFail,
  updateAssessmenConfiguration,
  updateAssessmentConfigurationSuccess,
  updateAssessmenConfigurationFail
} from '../actions/assessment-config.actions';

export const reducer = createReducer(
  initialConfigurationState,
  on(loadAssessmentConfigurations, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadAssessmentConfigurationsSuccess, (state, { configuration }) => ({
    ...state,
    ...loadedBaseState,
    configurations: configuration
  })),
  on(loadAssessmentConfigurationsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateAssessmenConfiguration, state => ({
    ...state,
    updating: true,
    updated: false
  })),
  on(updateAssessmentConfigurationSuccess, (state, { configuration }) => ({
    ...state,
    updating: false,
    updated: true,
    configurations: configuration
  })),
  on(updateAssessmenConfigurationFail, (state, { error }) => ({
    ...state,
    updating: false,
    ...errorBaseState,
    error
  }))
);

export function assessmentConfigurationReducer(
  state,
  action
): AssessmentConfigurationState {
  return reducer(state, action);
}
