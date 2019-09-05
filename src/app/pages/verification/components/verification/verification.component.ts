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
    showDynamicDimension: true,
    showDataFilter: false,
    showValidationRuleGroupFilter: false,
    stepSelections: ['pe', 'ou'],
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
  }

  setFormProperties(index, columns) {
    for (let a = 0; a < index; a++) {
      this.totalRep.push(0);
      this.totalVer.push(0);
      this.difference.push(0);
      this.error.push(0);
      this.provisionalAmount.push(0);
      this.loss.push(0);
      this.actualAmount.push(0);
      this.snackbar.open('Arrays Created', 'SUCCESSFUL', { duration: 1000 });
    }
  }

  setShowForm() {
    if (this.dataSelections[1].items[0].level) {
      this.showForm = true;
      this.periodLooper = setPeriodLooper(this.dataSelections);
      this.setFormProperties(
        this.verificationConfigCount,
        this.periodLooper.length
      );
    }
  }

  onVerUpdate(Indicatorindex, monthIndex) {
    this.totalVer[Indicatorindex] = 0; // Find sum
    this.difference[Indicatorindex] = Math.abs(
      this.totalRep[Indicatorindex] - this.totalVer[Indicatorindex]
    );
    if (this.totalRep[Indicatorindex] === 0) {
      this.error[Indicatorindex] = 100;
    } else {
      this.error[Indicatorindex] =
        this.difference[Indicatorindex] / this.totalRep[Indicatorindex];
    }
    this.provisionalAmount[Indicatorindex] =
      this.totalVer[Indicatorindex] *
      this.verificationConfigurations[Indicatorindex].unitFee;
    if (this.error[Indicatorindex] > this.errorRate) {
      const excess = (this.error[Indicatorindex] - this.errorRate) / 100;
      this.loss[Indicatorindex] = parseFloat(
        (
          excess *
          this.totalVer[Indicatorindex] *
          this.verificationConfigurations[Indicatorindex].unitFee
        ).toFixed(1)
      );
    }
    this.actualAmount[Indicatorindex] = parseFloat(
      (
        this.provisionalAmount[Indicatorindex] - this.loss[Indicatorindex]
      ).toFixed(2)
    );
    this.total(this.verificationConfigCount);
  }
  total(count) {
    this.totalAmount = 0; // TODO find total
    for (let index = 0; index < count; index++) {
      this.totalAmount = parseFloat(
        (this.actualAmount[index] + this.totalAmount).toFixed(2)
      );
      this.snackbar.open('Total Called', this.totalAmount.toString(), {
        duration: 1000
      });
    }
  }
}
