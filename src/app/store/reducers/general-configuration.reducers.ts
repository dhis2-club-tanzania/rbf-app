import { createReducer, on } from '@ngrx/store';
import {
  initialGeneralConfigurationState,
  GeneralConfigurationState
} from '../states/general-configuration.state';
import {
  loadGeneralConfigurations,
  loadGeneralConfigurationsFail,
  loadGeneralConfigurationsSucess,
  addGeneralConfigurations,
  addGeneralConfigurationsFail,
  addGeneralConfigurationsSuccess,
  updateGeneralConfigurations,
  updateGeneralConfigurationsFail,
  updateGeneralConfigurationsSuccess
} from '../actions/general-config.actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';
import { adapter } from '../states/general-configuration.state';

export const reducer = createReducer(
  initialGeneralConfigurationState,
  on(loadGeneralConfigurations, state => ({ ...state, loadingBaseState })),
  on(loadGeneralConfigurationsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(loadGeneralConfigurationsSucess, (state, { configurations }) =>
    adapter.addOne(configurations, { ...state, ...loadedBaseState })
  ),
  on(addGeneralConfigurations, state => ({
    ...state,
    added: false,
    adding: true
  })),
  on(addGeneralConfigurationsFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    adding: false,
    error
  })),
  on(addGeneralConfigurationsSuccess, (state, { configuration }) =>
    adapter.addOne(configuration, { ...state, adding: false, added: true })
  ),
  on(updateGeneralConfigurations, state => ({
    ...state,
    updated: false,
    updating: true
  })),
  on(updateGeneralConfigurationsFail, (state, { error }) => ({
    ...state,
    updated: false,
    updating: false,
    ...errorBaseState,
    error
  })),
  on(updateGeneralConfigurationsSuccess, (state, { configuration }) =>
    adapter.updateOne(configuration, {
      ...state,
      updated: true,
      updating: false
    })
  )
);

export function generalConfigurationReducer(
  state,
  action
): GeneralConfigurationState {
  return reducer(state, action);
}
