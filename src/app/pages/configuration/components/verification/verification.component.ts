import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VerificationConfiguration } from '../../models/verification-configuration.model';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationForm;
  indicator = 'Enter indicator';
  dataElement;
  toleranceRate = 'Enter tolerance rate in percentage';
  unitFee = 'Enter unit fee';
  dataElements = ['First data element', 'Second Data Element', 'Etc ...'];
  formDataArray: VerificationConfiguration[] = [];

  constructor() { }

  ngOnInit() {
    this.verificationForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      unitFee: new FormControl(),
      toleranceRate: new FormControl(),
    });
  }

  onClickDone(data) {
    this.formDataArray.push(
      {
        indicator: data.indicator,
        dataElement: {id: 'kjdfjdjk',
        name: data.dataElement},
        unitFee: data.unitFee,
        toleranceRate: data.toleranceRate,
      });
    console.log(this.formDataArray);
  }

  onClickAdd(data) {
    this.formDataArray.push(
      {
        indicator: data.indicator,
        dataElement: {id: 'kjdfjdjk',
        name: data.dataElement},
        unitFee: data.unitFee,
        toleranceRate: data.toleranceRate,
      });
    console.log(this.formDataArray);
  }
}
