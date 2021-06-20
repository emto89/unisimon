import { Component, AfterViewInit, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-covenantsn',
  templateUrl: './covenants.component.html',
  styleUrls: ['./covenants.component.scss'],
})
export class ConvenantsComponent implements OnInit {
  private form: FormGroup | undefined;
  selectedValue: string | undefined;

  countryList: Country[] = [
    { value: 1, viewValue: 'Argentina' },
    { value: 2, viewValue: 'Colombia' },
    { value: 3, viewValue: 'USA' },
  ];

  public partnerList: Partner[] = [
    {
      name: 'Universidad Miamonides',
      website: 'www.maimonides.edu',
    },
    {
      name: 'Universidad Nacional de la Plata',
      website: 'unip.edu.ar',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      partner: ['', [Validators.required]],
    });

    console.log(this.form.value.partner);
  }

  get getFormGroup() {
    return this.form;
  }
}

interface Country {
  value: number;
  viewValue: string;
}

interface Partner {
  name: string;
  website: string;
}
