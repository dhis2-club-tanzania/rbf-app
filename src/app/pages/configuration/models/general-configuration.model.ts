import { BaseConfiguration } from './configuration.model';

export interface GeneralConfiguration extends BaseConfiguration {
  periodType: string;
  errorRate: number;
}
