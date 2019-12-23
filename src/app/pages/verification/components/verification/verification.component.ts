import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getVerificationConfigurations,
  getTableStructure
} from 'src/app/store/selectors';
import { MatSnackBar } from '@angular/material';
import {
  getGeneralConfigurationErrorRate,
  getGeneralConfigurationOrunitLevel
} from 'src/app/store/selectors/general-configuration.selectors';
import { VerificationData } from './verificationData';
import {
  provisionalAmountSum,
  lossCalculator,
  actualAmount,
  totalAmount,
  error
} from '../../helpers/summations';
import { getPeriodObject } from '../../helpers/period.helper';
import { loadSelectionFilterData } from 'src/app/store/actions';
import { getSelectionFilterPeriod } from 'src/app/store/selectors/selection-filter.selectors';
import { setRepString, setVerString } from '../../helpers/strings';
import { getVerificationDataSet } from 'src/app/store/actions/data-set.actions';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit, OnDestroy {
  tableStructureSubscription: Subscription;
  errorRateSubscription: Subscription;
  orgUnitLevelSubscription: Subscription;

  verificationConfig$: Observable<VerificationConfiguration[]>;
  errorRate$: Observable<number>;
  orgUnitLevel$: Observable<string>;
  periodSelection$: Observable<any[]>;

  dataSelections: any;
  showForm = false;
  selectionFilterConfig: SelectionFilterConfig = {
    allowStepSelection: true,
    stepSelections: ['pe', 'ou'],
    showDynamicDimension: true,
    showDataFilter: false,
    showValidationRuleGroupFilter: false,
    periodFilterConfig: {
      singleSelection: true
    },
    orgUnitFilterConfig: {
      showUserOrgUnitSection: false,
      singleSelection: true,
      showOrgUnitGroupSection: false,
      showOrgUnitLevelSection: false,
      showOrgUnitLevelGroupSection: false
    }
  };

  // Form Properties are declared below
  formTitle = 'Verfication Form';
  orgUnitLevel = '';
  verificationData: VerificationData[] = [];
  isFormComplete = false;

  errorRate: number;
  totalRep = [];
  totalVer = [];
  difference = [];
  error = [];
  provisionalAmount: number[] = [];
  loss: number[] = [];
  actualAmount: number[] = [];
  totalAmount = 0;

  tableStructure$: Observable<any[]>;

  // Form Strings
  rep: string;
  ver: string;
  dataPresence = false;

  constructor(private store: Store<State>, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.store.dispatch(getVerificationDataSet());
    this.verificationConfig$ = this.store.select(getVerificationConfigurations);
    this.errorRate$ = this.store.select(getGeneralConfigurationErrorRate);
    this.orgUnitLevel$ = this.store.select(getGeneralConfigurationOrunitLevel);
    this.errorRateSubscription = this.errorRate$.subscribe(
      errorRate => (this.errorRate = errorRate),
      () => (this.errorRate = null)
    );
    this.orgUnitLevelSubscription = this.orgUnitLevel$.subscribe(
      orgUnitLevel => (this.orgUnitLevel = orgUnitLevel)
    );
  }

  ngOnDestroy() {
    this.errorRateSubscription.unsubscribe();
  }
  onFilterUpdateAction(dataSelections) {
    if (dataSelections.length > 1) {
      this.dataSelections = dataSelections;
      const orgunigData = _.find(
        dataSelections,
        dataSelection => dataSelection.dimension === 'ou'
      );
      const periodData = _.find(
        dataSelections,
        dataSelection => dataSelection.dimension === 'pe'
      );
      const selectedData = {
        organisationUnit: orgunigData.items[0].id,
        period: getPeriodObject(periodData.items[0])
      };
      this.store.dispatch(loadSelectionFilterData({ data: selectedData }));
      this.store.select(getTableStructure).subscribe();
      this.tableStructure$ = this.store.select(getTableStructure);
      this.tableStructureSubscription = this.tableStructure$.subscribe(
        tableData => {
          this.verificationData = tableData;
        }
      );
      this.periodSelection$ = this.store.select(getSelectionFilterPeriod);
      this.setShowForm();
      this.rep = setRepString(this.verificationData[0].monthlyValues.length);
      this.ver = setVerString(this.verificationData[0].monthlyValues.length);
    }
  }

  setFormProperties(indicatorsCount) {
    if (indicatorsCount > 0) {
      this.dataPresence = true;
    }
    for (let index = 0; index < indicatorsCount; index++) {
      this.totalRep.push(0);
      this.totalVer.push(0);
      this.difference.push(0);
      this.error.push(0);
      this.provisionalAmount.push(0);
      this.loss.push(0);
      this.actualAmount.push(0);
      this.snackbar.open('Arrays Created', 'SUCCESSFUL', { duration: 1000 });
    }
    for (let index = 0; index < indicatorsCount; index++) {
      this.onFormUpdate(index);
    }
  }
  setShowForm() {
    this.showForm = true;
    this.setFormProperties(this.verificationData.length);

    const periodType = this.dataSelections[0].items[0].type;
    this.formTitle = periodType.concat(
      ' ' + this.orgUnitLevel + ' Verification Form'
    );
  }
  onVerUpdate(indicatorIndex, monthIndex) {
    this.onFormUpdate(indicatorIndex);
    this.snackbar.open('Value Updated', 'SUCCESSFUL', { duration: 1000 });
  }
  onFormUpdate(indicatorIndex) {
    let totalRep = 0;
    for (
      let monthlyIndex = 0;
      monthlyIndex < this.verificationData[indicatorIndex].monthlyValues.length;
      monthlyIndex++
    ) {
      totalRep += this.verificationData[indicatorIndex].monthlyValues[
        monthlyIndex
      ].rep;
    }
    this.totalRep[indicatorIndex] = totalRep; // Updating totalRep
    let totalVer = 0;
    for (
      let monthlyIndex = 0;
      monthlyIndex < this.verificationData[indicatorIndex].monthlyValues.length;
      monthlyIndex++
    ) {
      totalVer += this.verificationData[indicatorIndex].monthlyValues[
        monthlyIndex
      ].ver;
    }
    this.totalVer[indicatorIndex] = totalVer; // Updated totalVer
    this.difference[indicatorIndex] = Math.abs(
      this.totalRep[indicatorIndex] - this.totalVer[indicatorIndex]
    ); // Updated the difference btn totalRep and totalVer
    this.error[indicatorIndex] = error(
      this.difference[indicatorIndex],
      this.totalRep[indicatorIndex]
    ); // Updated % Error
    this.provisionalAmount[indicatorIndex] = provisionalAmountSum(
      this.verificationData,
      this.totalVer[indicatorIndex],
      indicatorIndex
    ); // Updated Provisional Amount
    this.loss[indicatorIndex] = lossCalculator(
      this.provisionalAmount[indicatorIndex],
      this.errorRate,
      this.error[indicatorIndex]
    ); // Updated Loss due to excess % error
    this.actualAmount[indicatorIndex] = actualAmount(
      this.provisionalAmount[indicatorIndex],
      this.loss[indicatorIndex]
    ); // Updated Actual Amount
    this.totalAmount = totalAmount(this.actualAmount); // Updated totalAmount
  }

  completeForm() {
    this.isFormComplete = true;
  }
  incompleteForm() {
    this.isFormComplete = false;
  }
}
