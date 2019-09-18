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

export const getGeneralConfigurationPeriodType = createSelector(
  getGeneralConfigurationState,
  (state: GeneralConfigurationState) =>
    state.configuration
      ? state.configuration.periodType
        ? state.configuration.periodType
        : ''
      : ''
);

export const getGeneralConfigurationErrorRate = createSelector(
  getGeneralConfigurationState,
  (state: GeneralConfigurationState) =>
    state.configuration
      ? state.configuration.errorRate
        ? state.configuration.errorRate
        : 0
      : 0
);

export const getGeneralConfigurationOrunitLevel = createSelector(
  getGeneralConfigurationState,
  (state: GeneralConfigurationState) =>
    state.configuration
      ? state.configuration.organisationUnitLevel
        ? state.configuration.organisationUnitLevel.displayName
          ? state.configuration.organisationUnitLevel.displayName
          : ''
        : ''
      : ''
);

export const getVerificationDataSetId = createSelector(
  getGeneralConfigurationState,
  (state: GeneralConfigurationState) =>
    state.configuration
      ? state.configuration.verification
        ? state.configuration.verification
        : ''
      : ''
);

export const getAssessmentDataSetId = createSelector(
  getGeneralConfigurationState,
  (state: GeneralConfigurationState) =>
    state.configuration
      ? state.configuration.assessment
        ? state.configuration.assessment
        : ''
      : ''
);
