import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-call-for-proposals',
  templateUrl: './call-for-proposals.component.html',
  styleUrls: ['./call-for-proposals.component.scss'],
})
export class CallForProposalsComponent implements AfterViewInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  proposalName = 'Convocatoria Movilidad Nacional 2021-2';
  panelOpenState = false;
  public itemList: Item[] = [
    {
      code: '01234567890',
      startDate: '02/05/2021',
      closeDate: '26 días',
      status: 'Postulación Universidad',
      university: 'Universidad de la Sabana.',
      text: 'Bogotá, CO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur consequat est. Vestibulum suscipit tristique justo sed congue. Nulla dignissim condimentum sem et rhoncus.',
    },
  ];

  ngAfterViewInit() {}
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
