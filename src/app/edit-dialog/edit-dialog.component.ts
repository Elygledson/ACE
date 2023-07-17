import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NutritionalInformation } from '../nutritional-information/nutritional-information.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { content: NutritionalInformation }
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.data.content.id, [Validators.required]),
      nutrient: new FormControl(this.data.content.nutrient, [
        Validators.required,
      ]),
      unit: new FormControl(this.data.content.unit, [Validators.required]),
      amount: new FormControl(this.data.content.amount, [Validators.required]),
      minAmount: new FormControl(this.data.content.minAmount, [
        Validators.required,
      ]),
      maxAmount: new FormControl(this.data.content.maxAmount, [
        Validators.required,
      ]),
    });
  }

  save(): void {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }
}
