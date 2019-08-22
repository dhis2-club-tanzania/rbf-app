import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { deleteVerificationConfiguration } from 'src/app/store/actions';

@Component({
  selector: 'app-delete-verification',
  templateUrl: './delete-verification.component.html',
  styleUrls: ['./delete-verification.component.css']
})
export class DeleteVerificationComponent implements OnInit {
  constructor(
    private store: Store<State>,
    public dialoRef: MatDialogRef<DeleteVerificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit() {}

  onDelete(e) {
    e.stopPropagation();
    this.store.dispatch(deleteVerificationConfiguration({ id: this.data }));
    this.dialoRef.close();
  }

  onDismiss(e) {
    e.stopPropagation();
    this.dialoRef.close();
  }
}
