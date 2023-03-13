import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SharedModule } from '../shared/shared.module'



@NgModule({
    declarations: [
        VehiclesComponent,
        VehicleComponent
    ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    SharedModule
  ]
})
export class VehiclesModule { }
