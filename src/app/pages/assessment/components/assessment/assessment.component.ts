import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssessmentConfiguration } from '../../../configuration/models/assessment-configuration.model';
import { State } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import {
  getAssessmentConfigurations,
  getAssessmentConfigurationsCount,
  getSelectedCategoryCombo
} from 'src/app/store/selectors';
import { SelectionFilterConfig } from '@iapps/ngx-dhis2-selection-filters';
import { getGeneralConfigurationOrunitLevel } from 'src/app/store/selectors/general-configuration.selectors';
import { FormDataPayload } from 'src/app/core/models/form-data.model';
import { addFormDatavalues } from 'src/app/store/actions';
import { getAssessmentDataSet } from 'src/app/store/actions/data-set.actions';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessmentIndicators$: Observable<AssessmentConfiguration[]>;
  orgUnitLevel$: Observable<string>;

  dataSelections: any[];
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

  // Form properties
  showForm = false;
  createArray = true;
  allConfigurations = [];
  formTitle = 'Assessment Form';
  possibleMaxValue = [];
  possibleMaxValueSum = 0;
  obtainedValue = [];
  obtainedValueSum = 0;
  percentage = [];
  percentageSum = 0;
  selection = [];
  assessmentIndex: number;
  orgUnitLevel = '';

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(getAssessmentDataSet());
    this.assessmentIndicators$ = this.store.select(getAssessmentConfigurations);
    this.store
      .select(getGeneralConfigurationOrunitLevel)
      .subscribe(orgUnitLevel => (this.orgUnitLevel = orgUnitLevel));
    this.store
      .select(getAssessmentConfigurationsCount)
      .subscribe(count => (this.assessmentIndex = count));
    this.store
      .select(getAssessmentConfigurations)
      .subscribe(configs => (this.allConfigurations = configs));
  }

  onFilterUpdateAction(dataSelections) {
    if (dataSelections.length > 1) {
      this.dataSelections = dataSelections;
      this.showForm = true;
      this.formTitle = 'Summary of '.concat(
        dataSelections[0].items[0].type +
          ' Quality Activities/ Areas Assessment Results of the ' +
          this.orgUnitLevel
      );
      if (this.createArray) {
        this.createFormArrays(this.assessmentIndex);
        this.createArray = false;
      }
    }
  }

  createFormArrays(index) {
    for (let a = 0; a < index; a++) {
      this.possibleMaxValue.push(0);
      this.obtainedValue.push(0);
      this.selection.push(0);
      this.percentage.push(0);
    }
    this.posssibleMaxValueInitializer(index);
  }

  posssibleMaxValueInitializer(index) {
    for (let a = 0; a < index; a++) {
      this.possibleMaxValue[a] = this.allConfigurations[a].possibleMaxValue;
      this.possibleMaxValueSum += this.possibleMaxValue[a];
    }
  }
  onInputBlur(index, dataElement) {
    const dataSet = 'ojBzrqep2oK';
    let categoryCombo = '';
    this.store
      .select(getSelectedCategoryCombo(dataElement))
      .subscribe(category => (categoryCombo = category));
    const value: FormDataPayload = {
      period: this.dataSelections[0].items[0].id,
      dataSet: dataSet,
      orgUnit: this.dataSelections[1].items[0].id,
      dataElement: dataElement,
      categoryOptionCombo: categoryCombo,
      value: this.obtainedValue[index]
    };

    this.store.dispatch(addFormDatavalues({ payload: value }));
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
    this.onFormUpdate(index);
  }
  onOptionSelect(index, value) {
    this.selection[index] = value;

    if (this.selection[index] === 0) {
      this.obtainedValue[index] = 0;
    }
    this.onFormUpdate(index);
  }

  onFormUpdate(index) {
    this.percentage[index] = parseFloat(
      (
        (100 * this.obtainedValue[index]) /
        this.possibleMaxValue[index]
      ).toFixed(2)
    );
    this.total(this.assessmentIndex);
  }

  total(count) {
    let checker = 0;
    this.obtainedValueSum = 0;
    let percentageSum = 0;
    for (let index = 0; index < count; index++) {
      this.obtainedValueSum += this.obtainedValue[index];
      percentageSum += this.percentage[index];
      if (this.obtainedValue[index] !== 0) {
        checker++;
      }
    }
    this.percentageSum = parseFloat((percentageSum / checker).toFixed(2));
  }
}
