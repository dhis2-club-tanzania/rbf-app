import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  assessmentForm;
  indicator;
  possibleMaximumValue;
  dataElement = ['First data element', 'Second Data Element', 'Etc ...'];

  constructor() { }

  ngOnInit() {
    this.assessmentForm = new FormGroup({
      indicator: new FormControl(),
      possibleMaximumValue: new FormControl(),
    });
  }

}
