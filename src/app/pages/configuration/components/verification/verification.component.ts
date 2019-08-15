import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationForm;
  indicator = 'Enter indicator';
  dataElement;
  torelanceRate = 'Enter torelance rate in percentage';
  unitFee = 'Enter unit fee';
  dataElements = ['First data element', 'Second Data Element', 'Etc ...'];
  formDataArray = [];

  constructor() { }

  ngOnInit() {
    this.verificationForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      unitFee: new FormControl(),
      torelanceRate: new FormControl(),
    });
  }

  onClickDone(data) {
    console.log('Clicked');
  }

  onClickAdd(data) {
    console.log('Clicked');
  }
}
