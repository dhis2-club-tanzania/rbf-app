import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import { AssessmentConfigurationState } from '../states/assessment-configuration.state';

export const getAssessmentConfigurationState = createSelector(
  getRootState,
  (state: State) => state.assessmentConfiguration
);

export const getAssessmentConfigurations = createSelector(
  getAssessmentConfigurationState,
  (state: AssessmentConfigurationState) => state.assessmentConfig
);
