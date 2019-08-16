import { createReducer, on } from '@ngrx/store';
import {
  initialConfigurationState,
  VerificationConfigurationState
} from '../states/verification-configuration.state';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import {
  loadVerificationConfigurations,
  loadVerificationConfigurationsSuccess,
  loadVerificationConfigurationsFail,
  updateVerificationConfigurations,
  updateVerificationConfigurationsSuccess,
  updateVerificationConfigurationsFail
} from '../actions/verification-configuration.actions';

export const reducer = createReducer(
  initialConfigurationState,
  on(loadVerificationConfigurations, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadVerificationConfigurationsSuccess, (state, { configuration }) => ({
    ...state,
    ...loadedBaseState,
    configurations: configuration
  })),
  on(loadVerificationConfigurationsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateVerificationConfigurations, state => ({
    ...state,
    updating: true,
    updated: false
  })),
  on(updateVerificationConfigurationsSuccess, (state, { configuration }) => ({
    ...state,
    updating: false,
    updated: true,
    configurations: configuration
  })),
  on(updateVerificationConfigurationsFail, (state, { error }) => ({
    ...state,
    updating: false,
    ...errorBaseState,
    error
  }))
);

export function verificationConfigurationReducer(
  state,
  action
): VerificationConfigurationState {
  return reducer(state, action);
}
