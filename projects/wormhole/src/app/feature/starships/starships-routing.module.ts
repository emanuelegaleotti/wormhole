
import { Routes } from '@angular/router'
import { StarshipComponent } from './starship/starship.component'
import { StarshipsComponent } from './starships/starships.component'

export const starshipsRoutes: Routes = [
  {
    path: '', component: StarshipsComponent
  },
  {
    path: ':id',
    component: StarshipComponent
  }
]

