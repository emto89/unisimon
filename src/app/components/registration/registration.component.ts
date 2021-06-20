import { Component, AfterViewInit, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  private personalData: FormGroup;
  public residence: FormGroup;
  public emergencyContact: FormGroup;
  public contact: FormGroup;

  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder) {
    this.personalData = this.formBuilder.group({
      cedula: ['', Validators.required],
      lastname: ['', Validators.required],
      typeId: ['', Validators.required],
      id: ['', Validators.required],
      photo: ['', Validators.required],
      nationality: ['', Validators.required],
    });
    this.residence = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
    this.contact = this.formBuilder.group({
      mobile: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.emergencyContact = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobile: ['', Validators.required],
      contactAddress: ['', Validators.required],
      relationship: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  get getForm() {
    return this.personalData;
  }

  ngOnInit(): void {}
}

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
