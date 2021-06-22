import { Routes } from '@angular/router';

import { StarterComponent } from './starter.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { DataAuthorizationComponent } from '../components/data-authorization/data-authorization.component';
import { FaqComponent } from '../components/faq/faq.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { GlossaryComponent } from '../components/glossary/glossary.component';
import { ConvenantsComponent } from '../components/covenants/covenants.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { CallForProposalsComponent } from '../components/call-for-proposals/call-for-proposals.component';
import { UserNominationsComponent } from '../components/user-nominations/user-nominations.component';
import { ProgramApplicationComponent } from '../components/program-application/program-application.component';
import { CallsAvailableComponent } from '../components/call-available/call-available.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter Page' },
      ],
    },
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
    path: 'register',
    component: RegistrationComponent,
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
    path: 'convenants',
    component: ConvenantsComponent,
  },
  {
    path: 'my-nominations',
    component: UserNominationsComponent,
  },
  {
    path: 'applications',
    component: ProgramApplicationComponent,
  },
  {
    path: 'proposals', //THIS
    component: CallForProposalsComponent,
  },
  {
    path: 'available-calls',
    component: CallsAvailableComponent,
  },
];
