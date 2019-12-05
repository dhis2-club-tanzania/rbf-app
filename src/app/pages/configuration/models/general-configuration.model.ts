import { BaseConfiguration } from './configuration.model';

export interface GeneralConfiguration extends BaseConfiguration {
  periodType: string;
  errorRate?: number;
  organisationUnitLevel: { id: string; displayName: string; level: number };
  verification: string;
  assessment: string;
  categoryCombo: {
    id: string;
  };
}
