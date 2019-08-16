import { createReducer, on } from '@ngrx/store';
import {
  initialConfigurationState,
  ConfigurationState
} from '../states/configuration.state';
import {
  loadConfigurations,
  loadConfigurationsSuccess,
  loadConfigurationsFail,
  updateConfiguration,
  updateConfigurationSuccess,
  updateConfigurationFail
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';

export const reducer = createReducer(
  initialConfigurationState,
  on(loadConfigurations, state => ({ ...state, ...loadingBaseState })),
  on(loadConfigurationsSuccess, (state, { configuration }) => ({
    ...state,
    ...loadedBaseState,
    configurations: configuration
  })),
  on(loadConfigurationsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(updateConfiguration, state => ({
    ...state,
    updating: true,
    updated: false
  })),
  on(updateConfigurationSuccess, (state, { configuration }) => ({
    ...state,
    updating: false,
    updated: true,
    configurations: configuration
  })),
  on(updateConfigurationFail, (state, { error }) => ({
    ...state,
    updating: false,
    ...errorBaseState,
    error
  }))
);

export function configurationReducer(state, action): ConfigurationState {
  return reducer(state, action);
}
