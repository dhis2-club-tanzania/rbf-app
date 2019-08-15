import { BaseState, initialBaseState } from './base.state';

export interface DataElementsState extends BaseState {
  dataElements: Array<{ id: string; name: string }>;
}

export const initialDataElementsState: DataElementsState = {
  ...initialBaseState,
  dataElements: null
};
