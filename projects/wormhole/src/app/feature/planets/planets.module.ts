import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlanetsRoutingModule } from './planets-routing.module'
import { PlanetsComponent } from './planets/planets.component'
import { PlanetComponent } from './planet/planet.component'
import { SharedModule } from '../../shared/shared.module'
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { LorentzComponentsModule } from '../../../../../lorentz-components'


@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    SharedModule,
    TranslocoModule,
    LorentzComponentsModule
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'planets' }]
})
export class PlanetsModule { }
