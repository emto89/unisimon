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

  public itemList: Item[] = [
    {
      code: '01234567890',
      startDate: '02/05/2021',
      closeDate: '26 días',
      status: 'Postulación Universidad',
      university: 'Universidad de la Sabana.',
      text: 'Desde el DD/MM/YY en Bogotá, CO.',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur consequat est. Vestibulum suscipit tristique justo sed congue. Nulla dignissim condimentum sem et rhoncus.',
    },
    {
      code: '01234567890',
      startDate: '02/05/2021',
      closeDate: '26 días',
      status: 'Preparación movilidad',
      university: 'Universidad de la Florida.',
      text: 'Desde el DD/MM/YY en Miami, USA.',
      description:
        'Cras purus nulla, ornare et elementum et, sollicitudin nec lorem. Maecenas dapibus, libero non placerat pellentesque, sapien tortor dapibus odio, pulvinar scelerisque est velit at purus. Aenean consequat odio id felis placerat, nec facilisis nisl fringilla. Nunc non dictum eros, ullamcorper gravida erat.',
    },
  ];

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

interface Item {
  code: string;
  startDate: string;
  closeDate: string;
  status: string;
  university: string;
  text: string;
  description: string;
}
