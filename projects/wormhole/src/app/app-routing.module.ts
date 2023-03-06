import { loadRemoteModule } from '@angular-architects/module-federation'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './core/home/home.component'
import { NotFoundComponent } from './core/not-found/not-found.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'planets',
    loadChildren: () => import('./feature/planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./feature/starships/starships.module').then(m => m.StarshipsModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./feature/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:3000/vehiclesEntry.js',
      remoteName: 'vehicles',
      exposedModule: './VehiclesModule'
    }).then(m => m.VehiclesModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
