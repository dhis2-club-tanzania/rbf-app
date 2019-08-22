import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UUID } from '@iapps/utils';

import { State } from 'src/app/store/reducers';
import { DataElementList } from '../../../models/data-element.model';
import { getAllDataElements, getCurrentUser } from 'src/app/store/selectors';
import { VerificationConfiguration } from '../../../models/verification-configuration.model';
import { addVerificationConfiguration } from 'src/app/store/actions';
import { Router } from '@angular/router';
import { User } from 'src/app/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;
  currentUser$: Observable<User>;

  verificationForm;
  indicator = 'Enter indicator';
  dataElement = '[Select Data Element]';
  unitFee = 'Enter unit fee';
  formDataArray: any[] = [];

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.currentUser$ = this.store.select(getCurrentUser);
    this.verificationForm = new FormGroup({
      indicator: new FormControl(),
      dataElement: new FormControl(
        '[Select Data Element]',
        Validators.required
      ),
      unitFee: new FormControl(Validators.required)
    });
  }

  onClickDone() {
    const date = new Date();
    let userObject: User = null;

    this.currentUser$.subscribe(user => (userObject = user));
    const configObject: VerificationConfiguration = {
      id: UUID(),
      dataElement: this.verificationForm.value.dataElement,
      indicator: this.verificationForm.value.indicator,
      user: { id: userObject.id, name: userObject.displayName },
      lastUpdate: date,
      created: date,
      unitFee: +this.verificationForm.value.unitFee
    };
    this.store.dispatch(
      addVerificationConfiguration({ configuration: configObject })
    );

    this.router.navigate(['/configuration/verification']);
  }
}
