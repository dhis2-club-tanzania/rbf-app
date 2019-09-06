import { Component, OnInit } from '@angular/core';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';
import { Observable } from 'rxjs';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getVerificationConfigurations,
  getVerificationConfigurationsCount,
  getTableStructure
} from 'src/app/store/selectors';
import { MatSnackBar } from '@angular/material';
import {
  getGeneralConfigurationErrorRate,
  getGeneralConfigurationOrunitLevel
} from 'src/app/store/selectors/general-configuration.selectors';
import { VerificationData, verificationData } from './verificationData';
import { setPeriodLooper } from '../../Helpers/periodLooper';
import {
  VerSum,
  RepSum,
  difference,
  provisionalAmountSum,
  lossCalculator,
  actualAmount,
  totalAmount
} from '../../Helpers/summations';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationConfig$: Observable<VerificationConfiguration[]>;
  errorRate$: Observable<number>;
  orgUnitLevel$: Observable<string>;

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
  periodLooper = [];

  // Form Properties are declared below
  verificationConfigCount: number;
  verificationData: VerificationData[] = verificationData;

  errorRate: number;
  totalRep = [];
  totalVer = [];
  difference = [];
  error = [];
  provisionalAmount: number[] = [];
  loss: number[] = [];
  actualAmount: number[] = [];
  totalAmount = 0;
  verificationConfigurations = [];

  constructor(private store: Store<State>, private snackbar: MatSnackBar) {}

  ngOnInit() {
    // TODO deal with the subscription
    this.verificationConfig$ = this.store.select(getVerificationConfigurations);
    this.store.select(getTableStructure).subscribe();
    const sub = this.store
      .select(getVerificationConfigurationsCount)
      .subscribe(count => (this.verificationConfigCount = count));
    this.store
      .select(getVerificationConfigurations)
      .subscribe(configs => (this.verificationConfigurations = configs));
    this.errorRate$ = this.store.select(getGeneralConfigurationErrorRate);
    this.orgUnitLevel$ = this.store.select(getGeneralConfigurationOrunitLevel);
    this.errorRate$.subscribe(
      errorRate => (this.errorRate = errorRate),
      () => (this.errorRate = null)
    );
  }
  onFilterUpdateAction(dataSelections) {
    this.dataSelections = dataSelections;
    this.setShowForm();
    console.log(dataSelections);
  }
  setFormProperties(indicatorsCount) {
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
    this.periodLooper = setPeriodLooper(this.dataSelections);
    this.setFormProperties(this.verificationData.length);
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
    this.error[indicatorIndex] = parseFloat(
      (this.difference[indicatorIndex] / this.totalRep[indicatorIndex]).toFixed(
        1
      )
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
}
