import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) data: User,
  ) {
    this.signupForm = this.formBuilder.group({
      username: [null, [ Validators.required ]],
      password: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.dialogRef.close(this.signupForm.value);
    }
  }

}
