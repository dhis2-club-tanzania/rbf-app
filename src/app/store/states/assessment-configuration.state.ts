import { BaseState, initialBaseState } from './base.state';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';

export interface AssessmentConfigurationState extends BaseState {
  assessmentConfig: AssessmentConfiguration[];
  updating: boolean;
  updated: boolean;
}

export const initialConfigurationState: AssessmentConfigurationState = {
  ...initialBaseState,
  assessmentConfig: [],
  updated: false,
  updating: false
};
