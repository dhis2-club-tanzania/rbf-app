import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
  assessmentIndicators: AssessmentIndicators[] = [
    { indicator: 'OPD Malaria', dataElement: 'Itajulikana', possibleMaximumValue: 432},
    { indicator: 'OPD Molej', dataElement: 'Itajkjdkulikana', possibleMaximumValue: 4352},
    { indicator: 'kfhullfuD ', dataElement: 'Itajjkxcjulikana', possibleMaximumValue: 4332},
    { indicator: 'nckj', dataElement: 'Itaj,mcxjulikana', possibleMaximumValue: 4342},
  ];
  constructor() { }

  ngOnInit() {
  }


}
export interface AssessmentIndicators {
  indicator: string;
  dataElement: string;
  possibleMaximumValue: number;
}
