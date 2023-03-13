import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module'
import { CityWeatherComponent } from './feature/city-weather/city-weather.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CityWeatherComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[CityWeatherComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
