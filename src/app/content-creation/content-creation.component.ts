import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.css'],
})
export class ContentCreationComponent {
  constructor(
    public dialogRef: MatDialogRef<ContentCreationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { content: string }
  ) {}

  closeDialog() {
    this.dialogRef.close(this.data.content);
  }
}
