import { BaseState, initialBaseState } from './base.state';
import { GeneralConfiguration } from 'src/app/pages/configuration/models/general-configuration.model';
export interface GeneralConfigurationState extends BaseState {
  configuration: GeneralConfiguration;
  updating: boolean;
  updated: boolean;
  deleting: boolean;
  deleted: boolean;
  adding: boolean;
  added: boolean;
}

export const initialGeneralConfigurationState: GeneralConfigurationState = {
  ...initialBaseState,
  configuration: null,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  added: false,
  adding: false
};
