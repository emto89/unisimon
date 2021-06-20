import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarterComponent } from './starter.component';
import { StarterRoutes } from './starter.routing';

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

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(StarterRoutes),
  ],
  declarations: [
    StarterComponent,
    DashboardComponent,
    DataAuthorizationComponent,
    FaqComponent,
    RegistrationComponent,
    GlossaryComponent,
    ConvenantsComponent,
    ContactsComponent,
    CallForProposalsComponent,
    UserNominationsComponent,
    ProgramApplicationComponent,
    CallsAvailableComponent,
  ],
})
export class StarterModule {}
