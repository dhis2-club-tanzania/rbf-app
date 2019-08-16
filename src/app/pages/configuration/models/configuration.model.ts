import { VerificationConfiguration } from './verification-configuration.model';
import { AssessmentConfiguration } from './assessment-configuration.model';

export interface Configuration {
  name: string;
  assessment: AssessmentConfiguration[];
  verification: VerificationConfiguration[];
}
