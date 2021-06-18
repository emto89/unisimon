import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Material } from '../material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataAuthorizationComponent } from './data-authorization/data-authorization.component';
import { FaqComponent } from './faq/faq.component';
import { PartnersComponent } from './patners/patners.component';
import { NominationsComponent } from './nominations/nominations.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { ConvenantsComponent } from './covenants/covenants.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ApplicationsComponent } from './applications/applications.component';

import { PagesRoutes } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    Material,
    FlexLayoutModule,
    RouterModule.forChild(PagesRoutes),
  ],
  declarations: [
    DashboardComponent,
    DataAuthorizationComponent,
    FaqComponent,
    PartnersComponent,
    NominationsComponent,
    GlossaryComponent,
    ConvenantsComponent,
    ContactsComponent,
    ApplicationsComponent,
  ],
})
export class PagesModule {}
