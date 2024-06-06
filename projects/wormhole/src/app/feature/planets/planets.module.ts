import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PlanetsComponent } from './planets/planets.component'
import { PlanetComponent } from './planet/planet.component'
import { SharedModule } from '../../shared/shared.module'
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { LorentzComponentsModule } from '../../../../../lorentz-components'
import { provideRouter, RouterLink } from '@angular/router'
import { planetsRoutes } from './planets-routing.module'

@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    TranslocoModule,
    LorentzComponentsModule,
    RouterLink
  ],
  providers: [
    provideRouter(planetsRoutes),
    { provide: TRANSLOCO_SCOPE, useValue: 'planets' }
  ]
})
export class PlanetsModule {}
