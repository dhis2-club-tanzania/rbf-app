import { BaseState, initialBaseState } from './base.state';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface VerificationConfigurationState
  extends BaseState,
    EntityState<VerificationConfiguration> {
  updating: boolean;
  updated: boolean;
  deleting: boolean;
  deleted: boolean;
  adding: boolean;
  added: boolean;
}

export function selectConfigId(config: VerificationConfiguration): string {
  return config.id;
}

export const adapter: EntityAdapter<
  VerificationConfiguration
> = createEntityAdapter({
  selectId: selectConfigId,
  sortComparer: false
});
export const initialConfigurationState: VerificationConfigurationState = adapter.getInitialState(
  {
    ...initialBaseState,
    updated: false,
    updating: false,
    deleted: false,
    deleting: false,
    adding: false,
    added: false
  }
);
export const {
  selectIds: selectVerificationConfigIds,
  selectEntities: selectVerificationConfigEntities,
  selectAll: selectAllVerificationConfigurations,
  selectTotal: selectVerificationConfigCount
} = adapter.getSelectors();
