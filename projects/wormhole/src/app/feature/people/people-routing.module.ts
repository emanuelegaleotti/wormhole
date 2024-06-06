import { Routes } from '@angular/router'
import { PeopleComponent } from './people/people.component'
import { PersonComponent } from './person/person.component'

export const peopleRoutes: Routes = [
  { path: '', component: PeopleComponent },
  { path: ':id', component: PersonComponent }
]


