import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VerificationConfiguration } from '../../models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { DataElementList } from '../../models/data-element.model';
import { getAllDataElements } from 'src/app/store/selectors';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;

  verificationForm;
  indicator = 'Enter indicator';
  dataElement;
  toleranceRate = 'Enter tolerance rate in percentage';
  unitFee = 'Enter unit fee';
  formDataArray: VerificationConfiguration[] = [];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.verificationForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl('[Select Data Element]'),
      unitFee: new FormControl(),
      toleranceRate: new FormControl()
    });
  }

  onClickDone(data) {
    this.formDataArray.push({
      indicator: data.indicator,
      dataElementId: data.dataElement,
      unitFee: data.unitFee,
      toleranceRate: data.toleranceRate
    });
    console.log(this.formDataArray);
  }

  onClickAdd(data) {
    this.formDataArray.push({
      indicator: data.indicator,
      dataElementId: data.dataElement,
      unitFee: data.unitFee,
      toleranceRate: data.toleranceRate
    });
    console.log(this.formDataArray);
  }
}
