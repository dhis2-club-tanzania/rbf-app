import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { ConfigurationState } from '../states/configuration.state';

export const getConfigurationState = createSelector(
  getRootState,
  (state: State) => state.configuration
);

export const getCurrentConfigurations = createSelector(
  getConfigurationState,
  (state: ConfigurationState) => state.configurations
);
