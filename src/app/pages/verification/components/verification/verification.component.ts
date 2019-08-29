import { Component, OnInit } from '@angular/core';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';
import { Observable } from 'rxjs';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getVerificationConfigurations,
  getVerificationConfigurationsCount
} from 'src/app/store/selectors';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  dataSelections: any;
  showForm = false;
  verificationConfig$: Observable<VerificationConfiguration[]>;
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

  periodObject: any;
  orgUnitLevel: string;
  action;
  periodLooper = [];

  // Form Properties are deckared below
  verificationConfigCount: number;
  totalRep = [];
  totalVer = [];
  difference = [];
  verArray = [];
  error = [];
  provisionalAmount = [];
  loss = [];
  actualAmount = [];
  totalAmount = 0;

  constructor(private store: Store<State>, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.verificationConfig$ = this.store.select(getVerificationConfigurations);
    this.store
      .select(getVerificationConfigurationsCount)
      .subscribe(count => (this.verificationConfigCount = count));
  }

  onFilterUpdateAction(dataSelections) {
    this.dataSelections = dataSelections;
    this.setShowForm();
  }

  setFormProperties(index) {
    for (let a = 0; a < index; a++) {
      this.totalRep.push(0);
      this.totalVer.push(0);
      this.verArray.push(0);
      this.difference.push(0);
      this.error.push(0);
      this.provisionalAmount.push(0);
      this.loss.push(0);
      this.actualAmount.push(0);
      this.snackbar.open('Arrays Created', 'SUCCESSFUL', { duration: 1000 });
    }
  }

  setOrgUnitLevel() {
    switch (this.dataSelections[1].items[0].level) {
      case 1:
        this.orgUnitLevel = 'National';
        break;
      case 2:
        this.orgUnitLevel = 'District';
        break;
      case 3:
        this.orgUnitLevel = 'Chiefdom';
        break;
      case 4:
        this.orgUnitLevel = 'Facility';
        break;
    }
  }
  setPeriodLooper() {
    if (this.dataSelections[0].items[0].type === 'Monthly') {
      this.periodLooper = [this.dataSelections[0].items[0].name];
    }
    if (this.dataSelections[0].items[0].type === 'BiMonthly') {
      switch (this.dataSelections[0].items[0].id.charAt(5)) {
        case '1':
          {
            this.periodLooper = [
              'January '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'February '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '2':
          {
            this.periodLooper = [
              'March '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'April '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '3':
          {
            this.periodLooper = [
              'May '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'June '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '4':
          {
            this.periodLooper = [
              'July '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'August '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '5':
          {
            this.periodLooper = [
              'September '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'October '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '6':
          {
            this.periodLooper = [
              'November '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'December '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
      }
    }
    if (this.dataSelections[0].items[0].type === 'Quarterly') {
      switch (this.dataSelections[0].items[0].id.charAt(5)) {
        case '1':
          {
            this.periodLooper = [
              'January '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'February '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'March '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '2':
          {
            this.periodLooper = [
              'April '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'May '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'June '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '3':
          {
            this.periodLooper = [
              'July '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'August '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'September '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              )
            ];
          }
          break;
        case '4':
          {
            this.periodLooper = [
              'October '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'November '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'December '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
      }
    }
    if (this.dataSelections[0].items[0].type === 'SixMonthly') {
      switch (this.dataSelections[0].items[0].id.charAt(5)) {
        case '1':
          {
            this.periodLooper = [
              'January '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'February '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'March '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'April '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'May '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'June '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
        case '2':
          {
            this.periodLooper = [
              'July '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'August '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'September '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'October '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
              'November '.concat(
                this.dataSelections[0].items[0].id.slice(0, 4)
              ),
              'December '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
            ];
          }
          break;
      }
    }
    if (this.dataSelections[0].items[0].type === 'Yearly') {
      this.periodLooper = [
        'January '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'February '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'March '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'April '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'May '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'June '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'July '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'August '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'September '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'October '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'November '.concat(this.dataSelections[0].items[0].id.slice(0, 4)),
        'December '.concat(this.dataSelections[0].items[0].id.slice(0, 4))
      ];
    }
  }
  setShowForm() {
    if (this.dataSelections[1].items[0].level) {
      this.showForm = true;
      this.setOrgUnitLevel();
      this.setPeriodLooper();
      this.setFormProperties(this.verificationConfigCount);
    }
  }
  onVerBlur(index) {
    this.totalVer[index] = this.verArray[index];
    this.difference[index] = Math.abs(
      this.totalRep[index] - this.totalVer[index]
    );
    if (this.totalRep[index] === 0) {
      this.error[index] = 100;
    } else {
      this.error[index] = this.difference[index] / this.totalRep[index];
    }
    this.provisionalAmount[index] =
      this.totalVer[index] * this.verificationConfig$[index].unitFee;
    if (this.error[index] > 10) {
      const excess = this.error[index] - 10;
      this.loss[index] =
        excess * this.totalVer[index] * this.verificationConfig$[index].unitFee;
    }
    this.actualAmount[index] = this.provisionalAmount[index] - this.loss[index];
    for (let a = 0; a < index; a++) {
      this.totalAmount += this.actualAmount[index];
    }
    this.snackbar.open('update field', 'SUCCESSFUL', { duration: 1000 });
  }
}
