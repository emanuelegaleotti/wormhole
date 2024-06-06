import { loadRemoteModule } from '@angular-architects/module-federation'
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: '404',
    loadComponent: () => import('./feature/not-found/not-found.component').then(c => c.NotFoundComponent)
  },
  {
    path: '403',
    loadComponent: () => import('./feature/not-allowed/not-allowed.component').then(c => c.NotAllowedComponent)
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
    path: 'films',
    loadChildren: () => import('./feature/films/films.module').then(m => m.FilmsModule)
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
