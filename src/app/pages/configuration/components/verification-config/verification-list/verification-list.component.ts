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
import { MatDialog } from '@angular/material';
import { DeleteVerificationComponent } from '../delete-verification/delete-verification.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-list',
  templateUrl: './verification-list.component.html',
  styleUrls: ['./verification-list.component.css']
})
export class VerificationListComponent implements OnInit {
  verificationIndicators$: Observable<VerificationConfiguration[]>;
  verificationConfigurationError$: Observable<ErrorMessage>;
  constructor(
    private store: Store<State>,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.verificationIndicators$ = this.store.select(
      getVerificationConfigurations
    );
    this.verificationConfigurationError$ = this.store.select(
      getVerificationConfigErrorState
    );
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

  onEdit(e, id: string) {
    e.stopPropagation();
    this.router.navigate([`configuration/verification_edit/${id}`]);
  }
}
