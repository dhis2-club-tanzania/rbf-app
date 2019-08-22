import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import {
  getAllDataElements,
  getCurrentUser,
  getSelectedAssessmentConfig
} from 'src/app/store/selectors';
import { State } from 'src/app/store/reducers';
import {
  updateVerificationConfiguration,
  updateAssessmentConfiguration
} from 'src/app/store/actions';
import { User } from 'src/app/core';
import { AssessmentConfiguration } from '../../../models/assessment-configuration.model';
import { DataElementList } from '../../../models/data-element.model';

@Component({
  selector: 'app-edit-assessment',
  templateUrl: './edit-assessment.component.html',
  styleUrls: ['./edit-assessment.component.css']
})
export class EditAssessmentComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;
  currentUser$: Observable<User>;

  selectedAssessmentConfig: AssessmentConfiguration;
  assessmentForm;

  constructor(
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.currentUser$ = this.store.select(getCurrentUser);
    this.store
      .select(getSelectedAssessmentConfig(this.route.snapshot.params['id']))
      .subscribe(config => (this.selectedAssessmentConfig = config));
    this.assessmentForm = new FormGroup({
      indicator: new FormControl(
        this.selectedAssessmentConfig.indicator
          ? this.selectedAssessmentConfig.indicator
          : ''
      ),
      dataElement: new FormControl(
        this.selectedAssessmentConfig.dataElement
          ? this.selectedAssessmentConfig.dataElement
          : ''
      ),
      possibleMaxValue: new FormControl(
        this.selectedAssessmentConfig.possibleMaxValue
          ? this.selectedAssessmentConfig.possibleMaxValue
          : 0
      )
    });
  }

  onClickDone() {
    let userObject: User = null;
    this.currentUser$.subscribe(user => {
      userObject = user;
    });
    const date = new Date();
    const config: AssessmentConfiguration = {
      id: this.selectedAssessmentConfig.id,
      indicator: this.assessmentForm.value.indicator,
      dataElement: this.assessmentForm.value.dataElement,
      created: this.selectedAssessmentConfig.created,
      lastUpdate: date,
      user: { id: userObject.id, name: userObject.displayName },
      possibleMaxValue: this.assessmentForm.value.possibleMaxValue
    };
    console.log(config);
    this.store.dispatch(
      updateAssessmentConfiguration({ configuration: config })
    );
    this.router.navigate(['/configuration/assessment']);
  }

  onCancel() {
    this.router.navigate(['/configuration/assessment']);
  }
}
