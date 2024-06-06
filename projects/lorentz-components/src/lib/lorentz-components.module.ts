import { NgModule } from '@angular/core';
import { PagerComponent } from './pager/pager.component'
import { CommonModule } from '@angular/common'
import { TranslocoModule } from '@ngneat/transloco'
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [
    PagerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    PagerComponent,
    CardComponent
  ]
})
export class LorentzComponentsModule { }
