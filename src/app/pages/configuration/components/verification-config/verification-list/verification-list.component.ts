import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VerificationConfiguration } from '../../../models/verification-configuration.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Router } from '@angular/router';
import {
  getVerificationConfigurations,
  getVerificationConfigErrorState
} from 'src/app/store/selectors';
import { ErrorMessage } from 'src/app/core';
import { MatDialog } from '@angular/material';
import { DeleteVerificationComponent } from '../delete-verification/delete-verification.component';

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.css']
})
export class VerificationListComponent implements OnInit {
  verificationIndicators$: Observable<VerificationConfiguration[]>;
  verificationConfigurationError$: Observable<ErrorMessage>;
  constructor(private store: Store<State>, private route: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.verificationIndicators$ = this.store.select(
      getVerificationConfigurations
    );
    this.verificationConfigurationError$ = this.store.select(
      getVerificationConfigErrorState
    );
  }

  onClickAdd() {
    this.route.navigate(['/configuration/verification_configurations']);
  }
  onDeleteConfig(e, id: string) {
    e.stopPropagation();
    const dialogRef = this.dialog.open(DeleteVerificationComponent, {
      width: '350px',
      height: '200px',
      data: id
    });

    dialogRef.afterClosed();
  }
}
