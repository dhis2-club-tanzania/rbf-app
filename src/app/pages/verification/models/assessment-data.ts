import { AssessmentConfiguration } from '../../configuration/models/assessment-configuration.model';

export interface AssessmentData extends AssessmentConfiguration {
  value: number;
}
