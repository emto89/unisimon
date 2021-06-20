import { Component, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-user-nominations',
  templateUrl: './user-nominations.component.html',
  styleUrls: ['./user-nominations.component.scss'],
})
export class UserNominationsComponent {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
