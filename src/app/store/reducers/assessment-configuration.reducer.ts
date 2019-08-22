import { createReducer, on } from '@ngrx/store';
import {
  initialConfigurationState,
  AssessmentConfigurationState,
  adapter
} from '../states/assessment-configuration.state';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import {
  loadAssessmentConfigurations,
  loadAssessmentConfigurationSuccess,
  loadAssessmentConfigurationFail,
  updateAssessmentConfiguration,
  updateAssessmentConfigurationSuccess,
  updateAssessmentConfigurationFail,
  deleteAssessmentConfiguration,
  deleteAssessmentConfigurationSuccess,
  deleteAssessmentConfigurationFail,
  addAssessmentConfiguration,
  addAssessmentConfigurationFail,
  addAssessmentConfigurationSuccess
} from '../actions/assessment-config.actions';

export const reducer = createReducer(
  initialConfigurationState,
  on(loadAssessmentConfigurations, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadAssessmentConfigurationSuccess, (state, { configurations }) =>
    adapter.addMany(configurations, { ...state, ...loadedBaseState })
  ),
  on(loadAssessmentConfigurationFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateAssessmentConfiguration, state => ({
    ...state,
    updating: true,
    updated: false
  })),
  on(addAssessmentConfiguration, state => ({
    ...state,
    added: false,
    adding: true
  })),
  on(addAssessmentConfigurationFail, (state, { error }) => ({
    ...state,
    added: false,
    adding: false,
    ...errorBaseState,
    error
  })),
  on(addAssessmentConfigurationSuccess, (state, { configuration }) =>
    adapter.addOne(configuration, {
      ...state,
      added: true,
      adding: false,
      error: null
    })
  ),
  on(updateAssessmentConfigurationSuccess, (state, { configuration }) =>
    adapter.updateOne(configuration, {
      ...state,
      updated: true,
      updating: false,
      error: null
    })
  ),
  on(updateAssessmentConfigurationFail, (state, { error }) => ({
    ...state,
    updating: false,
    ...errorBaseState,
    error
  })),
  on(deleteAssessmentConfiguration, (state, { id }) => ({
    ...state,
    deleted: false,
    deleting: false
  })),
  on(deleteAssessmentConfigurationSuccess, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      deleted: true,
      deleting: false,
      error: null
    })
  ),
  on(deleteAssessmentConfigurationFail, (state, { error }) => ({
    ...state,
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
