import { NgModule } from '@angular/core';
import { LorentzService } from './lorentz.service'
import { NgxWebstorageModule } from 'ngx-webstorage'

@NgModule({
  declarations: [],
  imports: [
    NgxWebstorageModule
  ],
  providers:[
    LorentzService
  ],
  exports: []
})
export class LorentzModule { }
