import { createReducer, on } from '@ngrx/store';

import { ErrorMessage, User } from '../../core';
import {
  addCurrentUser,
  loadCurrentUser,
  loadCurrentUserFail
} from '../actions/user.actions';

export interface UserState {
  currentUser: User;
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: ErrorMessage;
}

export const initialState: UserState = {
  currentUser: null,
  loading: false,
  loaded: false,
  hasError: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadCurrentUser, state => ({
    ...state,
    loading: true,
    loaded: false,
    hasError: false,
    error: null
  })),
  on(addCurrentUser, (state, { currentUser }) => ({
    ...state,
    currentUser,
    loading: false,
    loaded: true
  })),
  on(loadCurrentUserFail, (state, { error }) => ({
    ...state,
    loading: false,
    hasError: true,
    error
  }))
);

export function userReducer(state, action): UserState {
  return reducer(state, action);
}
