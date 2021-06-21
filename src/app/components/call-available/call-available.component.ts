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
  selector: 'app-call-available',
  templateUrl: './call-available.component.html',
  styleUrls: ['./call-available.component.scss'],
})
export class CallsAvailableComponent {
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
      university: 'Universidad de la Sabana.',
      text: 'Desde el DD/MM/YY en Bogotá, CO.',
      closeDate: 'Cierra en 26 días.',
      description:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur consequat est. Vestibulum suscipit tristique justo sed congue. Nulla dignissim condimentum sem et rhoncus.',
    },
    {
      university: 'Universidad de la Florida.',
      text: 'Desde el DD/MM/YY en Miami, USA.',
      closeDate: 'Cierra en 11 días.',
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
  university: string;
  text: string;
  closeDate: string;
  description: string;
}
