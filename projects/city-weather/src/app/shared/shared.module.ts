import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToCelsiusPipe } from './pipes/to-celsius.pipe';



@NgModule({
  declarations: [
    ToCelsiusPipe
  ],
  exports: [
    ToCelsiusPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
