import { createReducer, on } from '@ngrx/store';
import {
  initialConfigurationState,
  VerificationConfigurationState,
  adapter
} from '../states/verification-configuration.state';

import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import {
  loadVerificationConfigurations,
  loadVerificationConfigurationSuccess,
  loadVerificationConfigurationFail,
  updateVerificationConfiguration,
  updateVerificationConfigurationSuccess,
  updateVerificationConfigurationFail,
  deleteVerificationConfiguration,
  deleteVerificationConfigurationSuccess,
  deleteVerificationConfigurationFail,
  addVerificationConfiguration,
  addVerificationConfigurationFail,
  addVerificationConfigurationSuccess
} from '../actions/verification-configuration.actions';

export const reducer = createReducer(
  initialConfigurationState,
  on(loadVerificationConfigurations, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadVerificationConfigurationSuccess, (state, { configurations }) =>
    adapter.addMany(configurations, { ...state, ...loadedBaseState })
  ),
  on(loadVerificationConfigurationFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateVerificationConfiguration, state => ({
    ...state,
    updating: true,
    updated: false
  })),
  on(updateVerificationConfigurationSuccess, (state, { configuration }) =>
    adapter.updateOne(configuration, {
      ...state,
      updated: true,
      updating: false,
      error: null
    })
  ),
  on(updateVerificationConfigurationFail, (state, { error }) => ({
    ...state,
    updating: false,
    ...errorBaseState,
    error
  })),
  on(deleteVerificationConfiguration, (state, { id }) => ({
    ...state,
    deleting: true,
    deleted: false
  })),
  on(deleteVerificationConfigurationSuccess, (state, { id }) =>
    adapter.removeOne(id, {
      ...state,
      deleted: true,
      deleting: false,
      error: null
    })
  ),
  on(deleteVerificationConfigurationFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(addVerificationConfiguration, state => ({
    ...state,
    added: false,
    adding: true
  })),
  on(addVerificationConfigurationFail, (state, { error }) => ({
    ...state,
    added: false,
    adding: false,
    ...errorBaseState,
    error: error
  })),
  on(addVerificationConfigurationSuccess, (state, { configuration }) =>
    adapter.addOne(configuration, {
      ...state,
      added: true,
      error: null,
      adding: false
    })
  )
);

export function verificationConfigurationReducer(
  state,
  action
): VerificationConfigurationState {
  return reducer(state, action);
}
