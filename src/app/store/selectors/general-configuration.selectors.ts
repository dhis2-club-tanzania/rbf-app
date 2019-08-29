import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { GeneralConfigurationState } from '../states/general-configuration.state';

export const getGeneralConfigurationState = createSelector(
  getRootState,
  (state: State) => state.generalConfiguration
);

export const getGeneralConfiguration = createSelector(
  getGeneralConfigurationState,
  (state: GeneralConfigurationState) => state.configuration
);
