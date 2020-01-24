import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { getRootState, State } from '../reducers';
import * as fromConfigState from '../states/assessment-configuration.state';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';
import { getAllFormDataValues } from './form-data.selectors';
import { FormDataValue } from '../../shared/models/form-data.model';
import { AssessmentData } from '../../pages/verification/models/assessment-data';
import { getDavaValues } from 'src/app/shared/helpers/get-data-values.helper';

export const getAssessmentConfigurationState = createSelector(
  getRootState,
  (state: State) => state.assessmentConfiguration
);

export const getAssessmentConfigurations = createSelector(
  getAssessmentConfigurationState,
  fromConfigState.selectAllAssessmentConfigurations
);

export const getAssessmentFormStructure = createSelector(
  getAssessmentConfigurations,
  getAllFormDataValues,
  (assesmentConfig, dataValues) => {
    const assessmentFormStructure: AssessmentData[] = [];
    _.forEach(assesmentConfig, (config: AssessmentConfiguration) => {
      const data = _.assign({}, config, {
        value: getDavaValues(config.id, dataValues),
      });
      assessmentFormStructure.push(data);
    });
    console.log(assessmentFormStructure);
    return assessmentFormStructure;
  }
);

export const getAssessmentConfigurationsAvailable = createSelector(
  getAssessmentConfigurations,
  (config: AssessmentConfiguration[]) => (config.length > 0 ? true : false)
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
