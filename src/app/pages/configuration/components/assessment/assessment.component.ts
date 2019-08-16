import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AssessmentConfiguration } from '../../models/assessment-configuration.model';
import { Store } from '@ngrx/store';
import { DataElementList } from '../../models/data-element.model';
import { Observable } from 'rxjs';
import { getAllDataElements } from 'src/app/store/selectors';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;

  assessmentForm;
  indicator = 'Enter indicator';
  dataElement;
  possibleMaximumValue = 'Enter the possible maximum value';
  formDataArray: AssessmentConfiguration[] = [];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.assessmentForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      possibleMaxValue: new FormControl()
    });
  }

  // TODO add the id and name of selected Data Element
  onClickDone(data) {
    this.indicator = data.indicator;
    this.dataElement = data.dataElement;
    this.possibleMaximumValue = data.possibleMaxValue;
    this.formDataArray.push({
      indicator: data.indicator,
      dataElement: { id: 'kjdfjdjk', name: data.dataElement },
      possibleMaxValue: data.possibleMaxValue
    });
    console.log(this.formDataArray);
  }
  onClickAdd(data) {
    this.formDataArray.push({
      indicator: data.indicator,
      dataElement: { id: 'kjdfjdjk', name: data.dataElement },
      possibleMaxValue: data.possibleMaxValue
    });
    console.log(this.formDataArray);
  }
}
