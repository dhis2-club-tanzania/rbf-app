import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { getRootState, State } from '../reducers';
import * as fromConfigState from '../states/verification-configuration.state';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';

export const getVerificationConfigurationState = createSelector(
  getRootState,
  (state: State) => state.verificationConfiguration
);

export const getVerificationConfigurations = createSelector(
  getVerificationConfigurationState,
  fromConfigState.selectAllVerificationConfigurations
);

export const getVerificationConfigErrorState = createSelector(
  getVerificationConfigurationState,
  (state: fromConfigState.VerificationConfigurationState) => state.error
);

export const getVerificationConfigurationsCount = createSelector(
  getVerificationConfigurationState,
  fromConfigState.selectVerificationConfigCount
);

export const getSelectedVerificationConfig = id =>
  createSelector(
    getVerificationConfigurations,
    (configurations: VerificationConfiguration[]) =>
      _.find(configurations, config => config.id === id)
  );

export const getTableStructure = createSelector(
  getVerificationConfigurationState,
  getVerificationConfigurations,
  (state, configurations) => {
    console.log(configurations);
  }
);
