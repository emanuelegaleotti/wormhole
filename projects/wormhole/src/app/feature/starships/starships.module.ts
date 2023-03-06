import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StarshipsRoutingModule } from './starships-routing.module'
import { StarshipsComponent } from './starships/starships.component'
import { StarshipComponent } from './starship/starship.component'
import { StoreModule } from '@ngrx/store'
import { STARSHIPS_KEY } from './starships-state/starships.selector'
import { StarshipsReducers } from './starships-state/starships.reducer'
import { EffectsModule } from '@ngrx/effects'
import { StarshipsEffects } from './starships-state/effects/starship.effects'
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [
        StarshipsComponent,
        StarshipComponent
    ],
    imports: [
        CommonModule,
        StarshipsRoutingModule,
        StoreModule.forFeature(STARSHIPS_KEY, StarshipsReducers),
        EffectsModule.forFeature([StarshipsEffects]),
        SharedModule
    ]
})
export class StarshipsModule { }
