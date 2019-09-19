import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';
import { getRootState, State } from '../reducers';
import * as fromConfigState from '../states/verification-configuration.state';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import {
  getSelectionFilterOrganisationUnit,
  getSelectionFilterPeriod,
  getSelectionFilterLoadedState
} from './selection-filter.selectors';
import { __assign } from 'tslib';

export const getVerificationConfigurationState = createSelector(
  getRootState,
  (state: State) => state.verificationConfiguration
);

export const getVerificationConfigurations = createSelector(
  getVerificationConfigurationState,
  fromConfigState.selectAllVerificationConfigurations
);

export const getVerificationConfigurationDataElements = createSelector(
  getVerificationConfigurations,
  (configurations: VerificationConfiguration[]) =>
    _.map(configurations, config => _.assign({}, { id: config.id }))
);

export const getVerificationConfigErrorState = createSelector(
  getVerificationConfigurationState,
  (state: fromConfigState.VerificationConfigurationState) => state.error
);

export const getVerificationConfigurationsCount = createSelector(
  getVerificationConfigurationState,
  fromConfigState.selectVerificationConfigCount
);

export const getSelectedVerificationConfig = id =>
  createSelector(
    getVerificationConfigurations,
    (configurations: VerificationConfiguration[]) =>
      _.find(configurations, config => config.id === id)
  );

export const getTableStructure = createSelector(
  getVerificationConfigurations,
  getSelectionFilterLoadedState,
  getSelectionFilterPeriod,
  getSelectionFilterOrganisationUnit,
  (
    configurations,
    loadedSelectionFilterData: boolean,
    period: any[],
    orgunit: string
  ) => {
    const tableStructure: any[] = [];
    if (loadedSelectionFilterData) {
      _.forEach(configurations, config => {
        let configData = {
          id: config.id,
          indicator: config.indicator,
          unitFee: config.unitFee
        };
        const monthlyValues = [];
        _.forEach(period, pe => {
          const monthlyValue = {
            rep: 0,
            ver: 0,
            periodId: pe.id,
            periodName: pe.name,
            orgunitId: orgunit
          };
          monthlyValues.push(monthlyValue);
        });
        configData = _.assign({}, configData, { monthlyValues: monthlyValues });
        tableStructure.push(configData);
      });
      return tableStructure;
    } else {
      return tableStructure;
    }
  }
);
