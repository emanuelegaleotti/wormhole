import {  Routes } from '@angular/router'
import { PlanetComponent } from './planet/planet.component'
import { PlanetsComponent } from './planets/planets.component'

export const planetsRoutes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: ':id', component: PlanetComponent }

]

