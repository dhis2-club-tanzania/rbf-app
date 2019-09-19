import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { getRootState, State } from '../reducers';
import * as fromConfigState from '../states/assessment-configuration.state';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';

export const getAssessmentConfigurationState = createSelector(
  getRootState,
  (state: State) => state.assessmentConfiguration
);

export const getAssessmentConfigurations = createSelector(
  getAssessmentConfigurationState,
  fromConfigState.selectAllAssessmentConfigurations
);

export const getAssessmentConfigurationsCount = createSelector(
  getAssessmentConfigurationState,
  fromConfigState.selectAssessmntConfigCount
);

export const getAssessmentConfigErrorState = createSelector(
  getAssessmentConfigurationState,
  (state: fromConfigState.AssessmentConfigurationState) => state.error
);

export const getSelectedAssessmentConfig = id =>
  createSelector(
    getAssessmentConfigurations,
    (configurations: AssessmentConfiguration[]) =>
      _.find(
        configurations,
        (config: AssessmentConfiguration) => config.id === id
      )
  );

export const getAssessmentConfigurationDataElements = createSelector(
  getAssessmentConfigurations,
  (configurations: AssessmentConfiguration[]) =>
    _.map(configurations, (config: AssessmentConfiguration) =>
      _.assign({}, { id: config.id })
    )
);
