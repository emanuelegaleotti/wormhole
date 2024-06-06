import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { filmsRoutes } from './films-routing.module'
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco'
import { SharedModule } from '../../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { provideRouter } from '@angular/router'

@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
    provideRouter(filmsRoutes),
    { provide: TRANSLOCO_SCOPE, useValue: 'films' }
  ]
})
export class FilmsModule { }
