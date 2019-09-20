import { BaseState, initialBaseState } from './base.state';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface OrganisationUnitsState
  extends BaseState,
    EntityState<{ id: string }> {}

export function selectOrgUnitId(orgUnit: { id: string }) {
  return orgUnit.id;
}

export const adapter = createEntityAdapter<{ id: string }>({
  selectId: selectOrgUnitId,
  sortComparer: false
});

export const initialOrganisationUnitState = adapter.getInitialState({
  ...initialBaseState
});

export const {
  selectAll: selectAllOrganisationUnits,
  selectIds: selectOrganisationUnitsIds,
  selectEntities: selectOrganisationunitEntities
} = adapter.getSelectors();
