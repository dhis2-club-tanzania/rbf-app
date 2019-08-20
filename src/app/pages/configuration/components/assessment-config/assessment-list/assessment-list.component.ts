import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssessmentConfiguration } from '../../../models/assessment-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getAssessmentConfigurations,
  getAssessmentConfigErrorState
} from 'src/app/store/selectors';
import { ErrorMessage } from 'src/app/core';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
  assessmentIndicators$: Observable<AssessmentConfiguration[]>;
  assessmentConfigurationError$: Observable<ErrorMessage>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.assessmentIndicators$ = this.store.select(getAssessmentConfigurations);
    this.assessmentConfigurationError$ = this.store.select(
      getAssessmentConfigErrorState
    );
  }
}
export interface AssessmentIndicators {
  indicator: string;
  dataElement: string;
  possibleMaximumValue: number;
}
