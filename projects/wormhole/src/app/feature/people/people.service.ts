import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Swapi } from '../../shared/models/swapi-model';
import { Person } from './person.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private readonly http: HttpClient) { }

  getPeople(pageId: number): Observable<Swapi> {
    return this.http.get<Swapi>(`${environment.swapiUrl}/people/?page=${pageId}`).pipe(
      map(r => ({ ...r, results: r.results.map((p: { [key: string]: string | number }) => this.mapPerson(p)) }))
    )
  }

  getPersonById(id: string): Observable<Person> {
    return this.http.get<{ [key: string]: any }>(`${environment.swapiUrl}/people/${id}`).pipe(
      map(p => this.mapPerson(p)))
  }

  mapPerson(p: { [key: string]: any }): Person {
    return new Person(
      p['url'].replace('https://swapi.dev/api/people/', '').replace('/', ''),
      p['name'],
      p['gender'],
      p['height'],
      p['mass'],
      p['hair_color'],
      p['skin_color'],
      p['eye_color'],
      p['birth_year']
    )
  }
}
