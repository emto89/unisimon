import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'material',
        loadChildren: () =>
          import('./material-component/material.module').then(
            (m) => m.MaterialComponentsModule
          ),
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./starter/starter.module').then((m) => m.StarterModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./icons/mat-icon.module').then((m) => m.IconsModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: LoginComponent,
  },
  {
    path: 'authorization',
    component: LoginComponent,
  },
  {
    path: 'frequentlyQuestions',
    component: LoginComponent,
  },
  {
    path: 'contacts',
    component: LoginComponent,
  },
  {
    path: 'glossary',
    component: LoginComponent,
  },
  {
    path: 'patners',
    component: LoginComponent,
  },
  {
    path: 'covenants',
    component: LoginComponent,
  },
  {
    path: 'nominations',
    component: LoginComponent,
  },
  {
    path: 'applications',
    component: LoginComponent,
  },
];
