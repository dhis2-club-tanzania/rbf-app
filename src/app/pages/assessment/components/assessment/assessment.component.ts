import { Component, OnInit } from '@angular/core';
import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';
import { Observable } from 'rxjs';
import { AssessmentConfiguration } from '../../../configuration/models/assessment-configuration.model';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import {
  getAssessmentConfigurations,
  getAssessmentConfigurationsCount
} from 'src/app/store/selectors';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  dataSelections: any;
  selectionFilterConfig: SelectionFilterConfig = {
    allowStepSelection: true,
    showDynamicDimension: false,
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

  assessmentIndicators$: Observable<AssessmentConfiguration[]>;

  // Form properties
  showForm = false;
  createArray = true;
  allConfigurations = [];
  possibleMaxValue = [];
  obtainedValue = [];
  percentage = [];
  selection = [];
  assessmentIndex: number;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.assessmentIndicators$ = this.store.select(getAssessmentConfigurations);
    this.store
      .select(getAssessmentConfigurationsCount)
      .subscribe(count => (this.assessmentIndex = count));
    this.store
      .select(getAssessmentConfigurations)
      .subscribe(configs => (this.allConfigurations = configs));
  }

  onFilterUpdateAction(dataSelections) {
    this.showForm = true;
    if (this.createArray) {
      this.createFormArrays(this.assessmentIndex);
      this.createArray = false;
    }
  }

  createFormArrays(index) {
    for (let a = 0; a < index; a++) {
      this.possibleMaxValue.push(0);
      this.obtainedValue.push(0);
      this.selection.push(1);
      this.percentage.push(0);
    }
    this.posssibleMaxValueInitializer(index);
  }

  posssibleMaxValueInitializer(index) {
    for (let a = 0; a < index; a++) {
      this.possibleMaxValue[a] = this.allConfigurations[a].possibleMaxValue;
    }
  }
  onInputBlur(index) {
    console.log(this.obtainedValue[index]);
    console.log(this.allConfigurations[index]);
  }
  onInputChange(index) {
    if (
      this.obtainedValue[index] > this.allConfigurations[index].possibleMaxValue
    ) {
      window.alert(
        'Input Value Exceeded the Possible Maximum Value of:' +
          this.allConfigurations[index].possibleMaxValue
      );
      this.obtainedValue[index] = 0;
    }
  }
  onOptionSelect(index, value) {
    this.selection[index] = value;
    console.log(typeof this.selection[index]);

    if (this.selection[index] === 0) {
      this.obtainedValue[index] = 0;
    }
    this.percentage[index] =
      (100 * this.obtainedValue[index]) / this.possibleMaxValue[index];
  }

  onSelectBlur(index) {
    console.log('If you know, you know');
  }
}
