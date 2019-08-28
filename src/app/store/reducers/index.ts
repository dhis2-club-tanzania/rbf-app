import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import { SystemInfoState } from '../states/system-info.state';
import { UserState } from '../states/user.state';
import { systemInfoReducer } from './system-info.reducer';
import { userReducer } from './user.reducer';
import { DataElementsState } from '../states/data-elements.state';
import { dataElementsReducer } from './data-elements.reducer';
import { VerificationConfigurationState } from '../states/verification-configuration.state';
import { AssessmentConfigurationState } from '../states/assessment-configuration.state';
import { assessmentConfigurationReducer } from './assessment-configuration.reducer';
import { verificationConfigurationReducer } from './verification-configuration.reducer';
import { GeneralConfigurationState } from '../states/general-configuration.state';
import { generalConfigurationReducer } from './general-configuration.reducers';

export interface State {
  user: UserState;
  systemInfo: SystemInfoState;
  router: RouterReducerState;
  dataElements: DataElementsState;
  verificationConfiguration: VerificationConfigurationState;
  assessmentConfiguration: AssessmentConfigurationState;
  generalConfiguration: GeneralConfigurationState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  systemInfo: systemInfoReducer,
  router: routerReducer,
  dataElements: dataElementsReducer,
  assessmentConfiguration: assessmentConfigurationReducer,
  verificationConfiguration: verificationConfigurationReducer,
  generalConfiguration: generalConfigurationReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
