import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Material } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconsRoutes } from './mat-icon.routing';

import { MatIconComponent } from './mat-icon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IconsRoutes),
    Material,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MatIconComponent],
})
export class IconsModule {}
