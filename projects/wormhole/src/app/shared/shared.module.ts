import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PagerComponent } from './pager/pager.component';
import { GenderPipe } from './pipes/gender.pipe';
import { SetComponentDirective } from './directive/set-component.directive'

@NgModule({
  declarations: [
    PagerComponent,
    GenderPipe,
    SetComponentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagerComponent,
    GenderPipe,
    SetComponentDirective
  ]
})
export class SharedModule { }
