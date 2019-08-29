import { Component, OnInit } from '@angular/core';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';
import { Observable } from 'rxjs';
import { VerificationConfiguration } from 'src/app/pages/configuration/models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getVerificationConfigurations } from 'src/app/store/selectors';
import { NgModel } from '@angular/forms';

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
  totalRep;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.verificationConfig$ = this.store.select(getVerificationConfigurations);
  }

  onFilterUpdateAction(dataSelections) {
    this.dataSelections = dataSelections;
    this.setShowForm();
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
    }
  }
  onBlur(input) {
    this.totalRep += input;
  }
}
