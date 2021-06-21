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
  selector: 'app-program-application',
  templateUrl: './program-application.component.html',
  styleUrls: ['./program-application.component.scss'],
})
export class ProgramApplicationComponent implements OnInit {
  public movilidad: FormGroup;
  public economicStatus: FormGroup;
  public academyData: FormGroup;
  public programRequest: FormGroup;
  public studentData: FormGroup;

  matcher = new MyErrorStateMatcher();
  constructor(private formBuilder: FormBuilder) {
    this.movilidad = this.formBuilder.group({
      type: ['', Validators.required],
    });
    this.economicStatus = this.formBuilder.group({
      economic_population: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.academyData = this.formBuilder.group({
      university: ['', Validators.required],
      languages: ['', Validators.required],
      education_level: ['', Validators.required],
      other: ['', Validators.required],
    });

    this.studentData = this.formBuilder.group({
      faculty_name: ['', Validators.required],
      program_name: ['', Validators.required],
      code: ['', Validators.required],
      prom: ['', Validators.required],
    });

    this.programRequest = this.formBuilder.group({
      nature_mobility: ['', Validators.required],
      name_mobility: ['', Validators.required],
      others: ['', Validators.required],
      observations: ['', Validators.required],
    });
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
