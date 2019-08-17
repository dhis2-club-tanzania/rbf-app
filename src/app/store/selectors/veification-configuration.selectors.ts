import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { VerificationConfigurationState } from '../states/verification-configuration.state';

export const getVerificationConfigurationState = createSelector(
  getRootState,
  (state: State) => state.verificationConfiguration
);

export const getVerificationConfigurations = createSelector(
  getVerificationConfigurationState,
  (state: VerificationConfigurationState) => state.verificationConfig
);