import { BaseState, initialBaseState } from './base.state';
import { DataElementList } from 'src/app/pages/configuration/models/data-element.model';

export interface DataElementsState extends BaseState {
  dataElements: DataElementList[];
}

export const initialDataElementsState: DataElementsState = {
  ...initialBaseState,
  dataElements: null
};
