import { VerificationConfiguration } from './verification-configuration.model';
import { AssessmentConfiguration } from './assessment-configuration.model';

export interface Configuration {
  configurationType: string;
  configurations: VerificationConfiguration[] | AssessmentConfiguration[];
}
