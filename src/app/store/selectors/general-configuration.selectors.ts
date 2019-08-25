import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';

import * as fromConfigState from '../states/general-configuration.state';

export const getGeneralConfigurationState = createSelector(
  getRootState,
  (state: State) => state.generalConfiguration
);

export const getGeneralConfiguration = createSelector(
  getGeneralConfigurationState,
  fromConfigState.selectAllGeneralConfigurations
);
