import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DataAuthorizationComponent } from './data-authorization/data-authorization.component';
import { FaqComponent } from './faq/faq.component';
import { PartnersComponent } from './patners/patners.component';
import { NominationsComponent } from './nominations/nominations.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { ConvenantsComponent } from './covenants/covenants.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ApplicationsComponent } from './applications/applications.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'data',
    component: DataAuthorizationComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'nominations',
    component: NominationsComponent,
  },
  {
    path: 'glossary',
    component: GlossaryComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'convenios',
    component: ConvenantsComponent,
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
  },
];
