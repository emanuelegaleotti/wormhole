import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CarbonService {

  constructor (
    private readonly http: HttpClient
  ) { }

  getCarbonImpact (site?: string) {
    return this.http.get(`/site=${site}`)
  }
}
