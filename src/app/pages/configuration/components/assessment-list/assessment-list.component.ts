import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssessmentConfiguration } from '../../models/assessment-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getAssessmentConfigurations } from 'src/app/store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
  assessmentIndicators$: Observable<AssessmentConfiguration[]>;
  constructor(private store: Store<State>, private route: Router) {}

  ngOnInit() {
    this.assessmentIndicators$ = this.store.select(getAssessmentConfigurations);
  }

  onClickAdd() {
    this.route.navigate(['/configuration/assessment_configurations']);
  }
}
export interface AssessmentIndicators {
  indicator: string;
  dataElement: string;
  possibleMaximumValue: number;
}
