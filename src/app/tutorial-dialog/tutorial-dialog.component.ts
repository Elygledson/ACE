import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.css'],
})
export class TutorialDialogComponent {
  constructor(public dialogRef: MatDialogRef<TutorialDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
