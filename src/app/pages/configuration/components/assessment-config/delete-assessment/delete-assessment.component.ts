import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { deleteAssessmentConfiguration } from 'src/app/store/actions';

@Component({
  selector: 'app-delete-assessment',
  templateUrl: './delete-assessment.component.html',
  styleUrls: ['./delete-assessment.component.css']
})
export class DeleteAssessmentComponent implements OnInit {
  constructor(
    private store: Store<State>,
    public dialogRef: MatDialogRef<DeleteAssessmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onDismiss(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.store.dispatch(deleteAssessmentConfiguration({ id: this.data }));
    this.dialogRef.close();
  }

  ngOnInit() {}
}
