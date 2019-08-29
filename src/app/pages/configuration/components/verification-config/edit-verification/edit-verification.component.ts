import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { DataElementList } from '../../../models/data-element.model';
import { User } from 'src/app/core';

import {
  getAllDataElements,
  getCurrentUser,
  getSelectedVerificationConfig
} from 'src/app/store/selectors';
import { VerificationConfiguration } from '../../../models/verification-configuration.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { updateVerificationConfiguration } from 'src/app/store/actions';
@Component({
  selector: 'app-edit-verification',
  templateUrl: './edit-verification.component.html',
  styleUrls: ['./edit-verification.component.css']
})
export class EditVerificationComponent implements OnInit {
  dataElements$: Observable<DataElementList[]>;
  currentUser$: Observable<User>;

  selectedVerificationConfig: VerificationConfiguration;
  verificationForm;
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataElements$ = this.store.select(getAllDataElements);
    this.store
      .select(getSelectedVerificationConfig(this.route.snapshot.params['id']))
      .subscribe(config => (this.selectedVerificationConfig = config));
    this.currentUser$ = this.store.select(getCurrentUser);
    this.verificationForm = new FormGroup({
      indicator: new FormControl(
        this.selectedVerificationConfig.indicator
          ? this.selectedVerificationConfig.indicator
          : ''
      ),
      dataElement: new FormControl(
        this.selectedVerificationConfig.dataElement
          ? this.selectedVerificationConfig.dataElement
          : ''
      ),
      unitFee: new FormControl(
        this.selectedVerificationConfig.unitFee
          ? this.selectedVerificationConfig.unitFee
          : ''
      )
    });
  }

  onClickDone() {
    let userObject: User = null;
    this.currentUser$.subscribe(user => {
      userObject = user;
    });
    const date = new Date();
    const config: VerificationConfiguration = {
      id: this.selectedVerificationConfig.id,
      indicator: this.verificationForm.value.indicator,
      dataElement: this.verificationForm.value.dataElement,
      created: this.selectedVerificationConfig.created,
      lastUpdate: date,
      user: { id: userObject.id, name: userObject.displayName },
      unitFee: this.verificationForm.value.unitFee
    };
    console.log(config);
    this.store.dispatch(
      updateVerificationConfiguration({ configuration: config })
    );
    this.router.navigate(['/configuration/verification']);
  }

  onCancel(e) {
    e.stopPropagation();
    this.router.navigate(['/configuration/verification']);
  }
}
