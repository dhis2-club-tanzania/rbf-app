import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { SystemInfo, ErrorMessage } from '../../core';
import { SystemInfoActions, SystemInfoActionTypes } from '../actions';

export interface State extends EntityState<SystemInfo> {
  // additional entities state properties
  /**
   * SystemInfo loading status
   */
  loading: boolean;

  /**
   * SystemInfo information loaded status
   */
  loaded: boolean;

  /**
   * SystemInfo information error status
   */
  hasError: boolean;

  /**
   * SystemInfo loading error
   */
  error: ErrorMessage;
}

export const adapter: EntityAdapter<SystemInfo> = createEntityAdapter<
  SystemInfo
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  hasError: false,
  error: null
});

export function reducer(
  state = initialState,
  action: SystemInfoActions
): State {
  switch (action.type) {
    case SystemInfoActionTypes.AddSystemInfo: {
      return adapter.addOne(action.systemInfo, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case SystemInfoActionTypes.LoadSystemInfo: {
      return {
        ...state,
        loading: true,
        loaded: false,
        hasError: false,
        error: null
      };
    }

    case SystemInfoActionTypes.LoadSystemInfoFail: {
      return { ...state, loading: false, hasError: true, error: action.error };
    }

    default: {
      return state;
    }
  }
}

export const getSystemInfoLoadingState = (state: State) => state.loading;
export const getSystemInfoLoadedState = (state: State) => state.loaded;
export const getSystemInfoHasErrorState = (state: State) => state.hasError;
export const getSystemInfoErrorState = (state: State) => state.error;

export const { selectAll: getSystemInfosState } = adapter.getSelectors();
