import { BaseConfiguration } from './configuration.model';

export interface VerificationConfiguration extends BaseConfiguration {
  unitFee: number;
  toleranceRate: number;
}
