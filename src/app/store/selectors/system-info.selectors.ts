import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { SystemInfoState } from '../reducers/system-info.reducer';

export const getSystemInfoState = createSelector(
  getRootState,
  (state: State) => state.systemInfo
);

export const getSystemInfo = createSelector(
  getSystemInfoState,
  (state: SystemInfoState) => state.systemInfo
);

export const getSystemInfoLoading = createSelector(
  getSystemInfoState,
  (state: SystemInfoState) => state.loading
);

export const getSystemInfoLoaded = createSelector(
  getSystemInfoState,
  (state: SystemInfoState) => state.loaded
);

export const getSystemInfoLoadingError = createSelector(
  getSystemInfoState,
  (state: SystemInfoState) => state.error
);
