import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UUID } from '@iapps/utils';

import { getAllDataElements, getCurrentUser } from 'src/app/store/selectors';
import { State } from 'src/app/store/reducers';
import { addAssessmentConfiguration } from 'src/app/store/actions';
import { User } from 'src/app/core';
import { AssessmentConfiguration } from '../../../models/assessment-configuration.model';
import { DataElementList } from '../../../models/data-element.model';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;
  currentUser$: Observable<User>;
  assessmentForm;
  indicator = 'Enter indicator';
  possibleMaximumValue = 'Enter the possible maximum value';
  formDataArray: any[] = [];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.currentUser$ = this.store.select(getCurrentUser);
    this.assessmentForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      possibleMaxValue: new FormControl()
    });
  }

  onClickDone() {
    let userObject: User = null;
    this.currentUser$.subscribe(user => {
      userObject = user;
    });
    const date = new Date();
    const config: AssessmentConfiguration = {
      id: UUID(),
      indicator: this.assessmentForm.value.indicator,
      dataElement: this.assessmentForm.value.dataElement,
      created: date,
      lastUpdate: date,
      user: { id: userObject.id, name: userObject.displayName },
      possibleMaxValue: this.assessmentForm.value.possibleMaxValue
    };
    this.store.dispatch(addAssessmentConfiguration({ configuration: config }));
    this.router.navigate(['/configuration/assessment']);
  }
}
