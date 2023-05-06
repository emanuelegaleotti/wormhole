import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarbonRoutingModule } from './carbon-routing.module';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { CarbonComponent } from './carbon/carbon.component'
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    CarbonComponent
  ],
  imports: [
    CommonModule,
    CarbonRoutingModule,
    TranslocoModule,
    ReactiveFormsModule
  ],
  providers:[{ provide: TRANSLOCO_SCOPE, useValue: 'carbon' }]
})
export class CarbonModule { }
