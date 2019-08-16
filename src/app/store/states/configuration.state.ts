import { BaseState, initialBaseState } from './base.state';
import { Configuration } from 'src/app/pages/configuration/models/configuration.model';

export interface ConfigurationState extends BaseState {
  configurations: Configuration;
  updating: boolean;
  updated: boolean;
}

export const initialConfigurationState: ConfigurationState = {
  ...initialBaseState,
  configurations: null,
  updated: false,
  updating: false
};
