import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Swapi } from '../shared/models/swapi-model'
import { Planet } from './planet-model'

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  constructor (private readonly http: HttpClient) { }

  getPlanets (idPage: number): Observable<Swapi> {
    return this.http.get<Swapi>(`${environment.swapiUrl}/planets/?page=${idPage}`).pipe(
      map(r => ({ ...r, results: r.results.map((p: { [key: string]: string | number }) => this.mapPlanet(p)) }))
    )
  }

  getPlanetById (id: string): Observable<Planet> {
    return this.http.get<{ [key: string]: any }>(`${environment.swapiUrl}/planets/${id}`).pipe(
      map(p => this.mapPlanet(p)))
  }

  mapPlanet (p: { [key: string]: any }): Planet {
    return new Planet(
      p['url'].replace('https://swapi.dev/api/planets/', '').replace('/', ''),
      p['name'],
      p['diameter'],
      p['climate'],
      p['gravity'],
      p['terrain'],
      p['population']
    )
  }
}
