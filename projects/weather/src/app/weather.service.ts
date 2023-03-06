import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Weather, WeatherDetail } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  getWeather(lat: number, long: number): Observable<Weather> {
    return this.http.get<{ [key: string]: any }>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${environment.API_key}`
    ).pipe(
      map(r => new Weather(
        r['name'],
        r['weather'].map((w: { [key: string]: string }) => new WeatherDetail(
          w['main'],
          w['description'],
        )),
        r['main']['temp'],
        r['main']['temp_min'],
        r['main']['temp_max'],
        r['main']['humidity'],
        r['main']['pressure'],
      ))
    )
  }
}
