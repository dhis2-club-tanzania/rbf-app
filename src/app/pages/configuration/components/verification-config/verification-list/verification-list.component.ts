import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VerificationConfiguration } from '../../../models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getVerificationConfigurations,
  getVerificationConfigErrorState
} from 'src/app/store/selectors';
import { ErrorMessage } from 'src/app/core';

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.css']
})
export class VerificationListComponent implements OnInit {
  verificationIndicators$: Observable<VerificationConfiguration[]>;
  verificationConfigurationError$: Observable<ErrorMessage>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.verificationIndicators$ = this.store.select(
      getVerificationConfigurations
    );
    this.verificationConfigurationError$ = this.store.select(
      getVerificationConfigErrorState
    );
  }
}
export interface VerificationIndicators {
  indicator: string;
  dataElement: string;
  unitFee: number;
  toleranceRate: number;
}
