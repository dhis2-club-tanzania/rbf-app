import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User, ErrorMessage } from '../../core';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State extends EntityState<User> {
  // additional entities state properties

  /**
   * User loading status
   */
  loading: boolean;

  /**
   * User information loaded status
   */
  loaded: boolean;

  /**
   * User information error status
   */
  hasError: boolean;

  /**
   * User loading error
   */
  error: ErrorMessage;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  loaded: false,
  hasError: false,
  error: null
});

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LoadCurrentUser: {
      return {
        ...state,
        loading: true,
        loaded: false,
        hasError: false,
        error: null
      };
    }

    case UserActionTypes.AddCurrentUser: {
      return adapter.addOne(action.currentUser, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case UserActionTypes.LoadCurrentUserFail: {
      return { ...state, loading: false, hasError: true, error: action.error };
    }

    default: {
      return state;
    }
  }
}

// additional selectors

/**
 * User loading state selector
 */
export const getUserLoadingState = (state: State) => state.loading;
export const getUserLoadedState = (state: State) => state.loaded;
export const getUserHasErrorState = (state: State) => state.hasError;
export const getUserErrorState = (state: State) => state.error;

export const { selectAll: selectAllUsers } = adapter.getSelectors();
