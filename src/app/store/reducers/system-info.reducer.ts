import { createReducer, on } from '@ngrx/store';

import { ErrorMessage, SystemInfo } from '../../core';
import { addSystemInfo, loadSystemInfo, loadSystemInfoFail } from '../actions';

export interface SystemInfoState {
  systemInfo: SystemInfo;
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: ErrorMessage;
}

export const initialState: SystemInfoState = {
  systemInfo: null,
  loading: false,
  loaded: false,
  hasError: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(loadSystemInfo, state => ({
    ...state,
    loading: true,
    loaded: false,
    hasError: false,
    error: null
  })),
  on(addSystemInfo, (state, { systemInfo }) => ({
    ...state,
    systemInfo,
    loading: false,
    loaded: true
  })),
  on(loadSystemInfoFail, (state, { error }) => ({
    ...state,
    loading: false,
    hasError: true,
    error
  }))
);

export function systemInfoReducer(state, action): SystemInfoState {
  return reducer(state, action);
}
