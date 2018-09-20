import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromUser from '../reducers/user.reducer';
import * as fromSystemInfo from '../reducers/system-info.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface State {
  /**
   * User state
   */
  user: fromUser.State;

  /**
   * System info state
   */
  systemInfo: fromSystemInfo.State;

  /**
   * Router state
   */
  route: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  systemInfo: fromSystemInfo.reducer,
  route: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
