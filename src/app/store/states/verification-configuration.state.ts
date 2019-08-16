import { BaseState, initialBaseState } from './base.state';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';

export interface VerificationConfigurationState extends BaseState {
  verificationConfig: VerificationConfiguration[];
  updating: boolean;
  updated: boolean;
}

export const initialConfigurationState: VerificationConfigurationState = {
  ...initialBaseState,
  verificationConfig: [],
  updated: false,
  updating: false
};
