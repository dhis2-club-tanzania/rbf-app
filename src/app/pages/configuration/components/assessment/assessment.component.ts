import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssessmentConfiguration } from '../../models/assessment-configuration.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  assessmentForm;
  indicator = 'Enter indicator';
  dataElement;
  possibleMaximumValue = 'Enter the possible maximum value';
  dataElements = ['First data element', 'Second Data Element', 'Etc ...'];
  formDataArray: AssessmentConfiguration[] = [];

  constructor() { }

  ngOnInit() {
    this.assessmentForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      possibleMaxValue: new FormControl(),
    });
  }

  onClickDone(data) {
    this.indicator = data.indicator;
    this.dataElement = data.dataElement;
    this.possibleMaximumValue = data.possibleMaxValue;
    this.formDataArray.push(
      {
        indicator: data.indicator,
        dataElement: {id: 'kjdfjdjk',
        name: data.dataElement},
        possibleMaxValue: data.possibleMaxValue
      });
    console.log(this.formDataArray);
  }
  onClickAdd(data) {
    this.formDataArray.push(
      {
      indicator: data.indicator,
      dataElement: {id: 'kjdfjdjk',
      name: data.dataElement},
      possibleMaxValue: data.possibleMaxValue
    });
    console.log(this.formDataArray);
  }

}
