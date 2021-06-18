import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-authorization',
  templateUrl: './data-authorization.component.html',
  styleUrls: ['./data-authorization.component.scss'],
})
export class DataAuthorizationComponent implements AfterViewInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  ngAfterViewInit() {}
}
