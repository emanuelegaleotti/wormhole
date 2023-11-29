import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { PEOPLE_KEY } from './people-state/people.selector';
import { PeopleReducers } from './people-state/people.reducer';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { LorentzComponentsModule } from '../../../../../lorentz-components'



@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule,
    StoreModule.forFeature(PEOPLE_KEY, PeopleReducers),
    TranslocoModule,
    LorentzComponentsModule
  ],
  providers:[{ provide: TRANSLOCO_SCOPE, useValue: 'people' }]
})
export class PeopleModule { }
