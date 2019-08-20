import { BaseState, initialBaseState } from './base.state';
import { AssessmentConfiguration } from 'src/app/pages/configuration/models/assessment-configuration.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface AssessmentConfigurationState
  extends BaseState,
    EntityState<AssessmentConfiguration> {
  updating: boolean;
  updated: boolean;
  deleting: boolean;
  deleted: boolean;
  adding: boolean;
  added: boolean;
}

export function selectConfigId(config: AssessmentConfiguration): string {
  return config.id;
}

export const adapter: EntityAdapter<
  AssessmentConfiguration
> = createEntityAdapter({
  sortComparer: false,
  selectId: selectConfigId
});

export const initialConfigurationState: AssessmentConfigurationState = adapter.getInitialState(
  {
    ...initialBaseState,
    updated: false,
    updating: false,
    deleting: false,
    deleted: false,
    adding: false,
    added: false
  }
);

export const {
  selectIds: seletcAssessmentIds,
  selectEntities: selectAssessmentConfigEntities,
  selectAll: selectAllAssessmentConfigurations,
  selectTotal: selectAssessmntConfigCount
} = adapter.getSelectors();
