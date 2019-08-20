import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import * as fromConfigState from '../states/assessment-configuration.state';

export const getAssessmentConfigurationState = createSelector(
  getRootState,
  (state: State) => state.assessmentConfiguration
);

export const getAssessmentConfigurations = createSelector(
  getAssessmentConfigurationState,
  fromConfigState.selectAllAssessmentConfigurations
);

export const getAssessmentConfigErrorState = createSelector(
  getAssessmentConfigurationState,
  (state: fromConfigState.AssessmentConfigurationState) => state.error
);
