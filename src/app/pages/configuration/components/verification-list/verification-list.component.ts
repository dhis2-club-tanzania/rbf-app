import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VerificationConfiguration } from '../../models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getVerificationConfigurations } from 'src/app/store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.css']
})
export class VerificationListComponent implements OnInit {
  verificationIndicators$: Observable<VerificationConfiguration[]>;
  constructor(private store: Store<State>, private route: Router) {}

  ngOnInit() {
    this.verificationIndicators$ = this.store.select(
      getVerificationConfigurations
    );
  }

  onClickAdd() {
    this.route.navigate(['/configuration/verification_configurations']);
  }
}
export interface VerificationIndicators {
  indicator: string;
  dataElement: string;
  unitFee: number;
  toleranceRate: number;
}
