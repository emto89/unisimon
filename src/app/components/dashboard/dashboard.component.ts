import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  public itemList: Item[] = [
    {
      title: 'POSTULACIONES',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'CONVOCATORIAS',
      text: 'Fusce efficitur consequat est. Vestibulum suscipit tristique.',
    },
    {
      title: 'CONVENIOS',
      text: 'Justo congue. Nulla nissim condimentum et rhoncus.',
    },
  ];
  ngAfterViewInit() {}
}

interface Item {
  title: string;
  text: string;
}
