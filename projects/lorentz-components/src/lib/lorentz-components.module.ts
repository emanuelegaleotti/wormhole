import { NgModule } from '@angular/core';
import { PagerComponent } from './pager/pager.component'
import { CommonModule } from '@angular/common'
import { TranslocoModule } from '@ngneat/transloco'

@NgModule({
  declarations: [
    PagerComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [
    PagerComponent
  ]
})
export class LorentzComponentsModule { }
