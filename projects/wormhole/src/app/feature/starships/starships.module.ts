import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { starshipsRoutes } from './starships-routing.module'
import { StarshipsComponent } from './starships/starships.component'
import { StarshipComponent } from './starship/starship.component'
import { StoreModule } from '@ngrx/store'
import { STARSHIPS_KEY } from './starships-state/starships.selector'
import { StarshipsReducers } from './starships-state/starships.reducer'
import { EffectsModule } from '@ngrx/effects'
import { StarshipsEffects } from './starships-state/effects/starship.effects'
import { SharedModule } from "../../shared/shared.module";
import { LorentzComponentsModule } from '../../../../../lorentz-components'
import { TranslocoModule } from '@ngneat/transloco'
import { provideRouter, RouterLink } from '@angular/router'


@NgModule({
    declarations: [
        StarshipsComponent,
        StarshipComponent
    ],
  imports: [
    CommonModule,
    StoreModule.forFeature(STARSHIPS_KEY, StarshipsReducers),
    EffectsModule.forFeature([StarshipsEffects]),
    SharedModule,
    LorentzComponentsModule,
    TranslocoModule,
    RouterLink
  ],
  providers: [
    provideRouter(starshipsRoutes)
  ]
})
export class StarshipsModule { }
