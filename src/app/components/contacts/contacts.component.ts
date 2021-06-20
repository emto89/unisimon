import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements AfterViewInit {
  baqPhone = '+57 (5) 3444333 extensiones 165 y 217';
  baqMobile = '(+57) 316 8778632';
  baqMail = 'relint@unisimonbolivar.edu.co';
  cucutaPhone = '(+57) (7) 5827070, extensión 139';
  cucutaMobile = '(+57) 3012100724';
  cucutaMail = 'ori@unisimonbolivar.edu.co';

  public personalBaq: Item[] = [
    {
      name: 'KATHERINE MAESTRE VARGAS',
      title: 'Coordinadora de Movilidad Académica',
      email: 'katherine.maestre@unisimonbolivar.edu.co',
    },
    {
      name: 'JAIME DÍAZ URIBE',
      title: 'Coordinador de Internacionalización de Ingeniería ',
      email: 'jaime.diaz1@unisimonbolivar.edu.co',
    },
    {
      name: 'GLADIS RUIZ GÓMEZ ',
      title:
        'Coordinadora de Internacionalización Facultad de Ciencias Jurídicas y Sociales',
      email: 'gladis.ruiz@unisimonbolivar.edu.co',
    },
    {
      name: 'MARÍA CAROLINA VERGARA VANEGAS ',
      title:
        'Coordinadora de Internacionalización Facultad de Administración y Negocios ',
      email: 'mvergara14@unisimonbolivar.edu.co',
    },
    {
      name: 'LILIANA GUERRA CANTILLO',
      title:
        'Coordinadora de Internacionalización Facultad de Ciencias Básicas y Biomédicas',
      email: 'lguerra21@unisimonbolivar.edu.co',
    },
    {
      name: 'JULIETH HOLLMANN MENDOZA ',
      title: 'Coordinadora de Internacionalización Ciencias de la Salud ',
      email: 'julieth.hollmann@unisimonbolivar.edu.co',
    },
  ];

  public teachers: Item[] = [
    {
      name: 'Greys Rodelo Olmos ',
      title: 'Enfermería ',
      email: 'grodelo2@unisimonbolivar.edu.co',
    },
    {
      name: 'Maira Duran Suarez ',
      title: 'Instrumentación Quirúrgica ',
      email: 'maira.duran@unisimonbolivar.edu.co',
    },
    {
      name: 'Mónica Tatiana Conde Rivera',
      title: 'Medicina',
      email: 'mconde4@unisimonbolivar.edu.co',
    },
    {
      name: 'Rosileydis Barraza Rodríguez ',
      title: 'Fisioterapia ',
      email: 'rbarraza@unisimonbolivar.edu.co',
    },
  ];

  public personalCucuta: Item[] = [
    {
      name: 'FABER ALBERTO PEÑA GARCIA',
      title: 'Coordinador Departamento de Internacionalización y Cooperación ',
      email: 'f.pena@unisimonbolivar.edu.co',
    },
  ];
  ngAfterViewInit() {}
}

interface Item {
  name: string;
  title: string;
  email: string;
}
