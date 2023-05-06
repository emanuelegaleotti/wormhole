import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { FilmsRoutingModule } from './films-routing.module'
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { SharedModule } from '../../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    TranslocoModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[{ provide: TRANSLOCO_SCOPE, useValue: 'films' }]
})
export class FilmsModule { }
