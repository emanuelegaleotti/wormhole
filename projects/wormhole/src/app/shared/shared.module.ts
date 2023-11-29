import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { GenderPipe } from './pipes/gender.pipe';
import { SetComponentDirective } from './directive/set-component.directive';
import { CardComponent } from './card/card.component';
import { RatingComponent } from './rating/rating.component'
import { TranslocoModule } from '@ngneat/transloco'

@NgModule({
  declarations: [
    GenderPipe,
    SetComponentDirective,
    CardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    GenderPipe,
    SetComponentDirective,
    RatingComponent,
    CardComponent
  ]
})
export class SharedModule { }
