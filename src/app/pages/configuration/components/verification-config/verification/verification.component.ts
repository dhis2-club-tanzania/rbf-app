import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UUID } from '@iapps/utils';

import { State } from 'src/app/store/reducers';
import { DataElementList } from '../../../models/data-element.model';
import { getAllDataElements } from 'src/app/store/selectors';
import { VerificationConfiguration } from '../../../models/verification-configuration.model';
import { addVerificationConfiguration } from 'src/app/store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;

  verificationForm;
  indicator = 'Enter indicator';
  dataElement = '[Select Data Element]';
  toleranceRate = 'Enter tolerance rate in percentage';
  unitFee = 'Enter unit fee';
  formDataArray: any[] = [];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.verificationForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl(
        '[Select Data Element]',
        Validators.required
      ),
      unitFee: new FormControl(Validators.required),
      toleranceRate: new FormControl(Validators.required)
    });
  }

  onClickDone() {
    const date = new Date();
    const configObject: VerificationConfiguration = {
      id: UUID(),
      dataElement: this.verificationForm.value.dataElement,
      indicator: this.verificationForm.value.indicator,
      user: { id: '', name: '' },
      lastUpdate: date,
      created: date,
      unitFee: +this.verificationForm.value.unitFee,
      toleranceRate: +this.verificationForm.value.toleranceRate
    };
    this.store.dispatch(
      addVerificationConfiguration({ configuration: configObject })
    );

    this.router.navigate(['/configuration/verification']);
  }
}
