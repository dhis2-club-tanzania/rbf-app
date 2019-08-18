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
  deleteAssessmentConfigurationFail
} from '../actions/assessment-config.actions';

export const reducer = createReducer(
  initialConfigurationState,
  on(loadAssessmentConfigurations, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadAssessmentConfigurationSuccess, (state, { configuration }) =>
    adapter.addOne(configuration, { ...state, ...loadedBaseState })
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
  on(updateAssessmentConfigurationSuccess, (state, { configuration }) =>
    adapter.updateOne(configuration, {
      ...state,
      updated: true,
      updating: false
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
    adapter.removeOne(id, { ...state, deleted: true, deleting: false })
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
