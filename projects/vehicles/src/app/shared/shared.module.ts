import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { GenderPipe } from './pipes/gender.pipe'

@NgModule({
  declarations: [
    PagerComponent,
    GenderPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagerComponent,
    GenderPipe
  ]
})
export class SharedModule { }
