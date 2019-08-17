import { BaseState, initialBaseState } from './base.state';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface VerificationConfigurationState
  extends BaseState,
    EntityState<VerificationConfiguration> {
  updating: boolean;
  updated: boolean;
}

export function sortByIndicator(
  config1: VerificationConfiguration,
  config2: VerificationConfiguration
): number {
  return config1.indicator.localeCompare(config2.indicator);
}

export function selectConfigId(config: VerificationConfiguration): string {
  return config.id;
}

export const adapter: EntityAdapter<
  VerificationConfiguration
> = createEntityAdapter({
  selectId: selectConfigId,
  sortComparer: sortByIndicator
});
export const initialConfigurationState: VerificationConfigurationState = adapter.getInitialState(
  {
    ...initialBaseState,
    updated: false,
    updating: false
  }
);
export const {
  selectIds: selectVerificationConfigIds,
  selectEntities: selectVerificationConfigEntities,
  selectAll: selectAllVerificationConfigurations,
  selectTotal: selectVerificationConfigCount
} = adapter.getSelectors();
