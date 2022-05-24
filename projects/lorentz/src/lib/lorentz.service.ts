import { Injectable } from '@angular/core'
import { fromEvent, merge, Observable, Observer, of } from 'rxjs'
import { EventMessage } from './eventMessage.model'
import { filter, map, switchMap } from 'rxjs/operators'
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage'

@Injectable({
  providedIn: 'root'
})
export class LorentzService {
  eventBus: CustomEvent = new CustomEvent(
    'lorentz-event-bus',
    { detail: new EventMessage('all', 'Init event bus', 'lorentz service') })

  constructor (
    private readonly sessionStorage: SessionStorageService,
    private readonly localStorage: LocalStorageService,
  ) {
    this.dispatchEvent()
  }

  sendEventBusMessage (message: EventMessage): void {
    this.eventBus = new CustomEvent(
      'lorentz-event-bus',
      { detail: message }
    )
    this.dispatchEvent()
  }

  dispatchEvent (): void {
    window.dispatchEvent(this.eventBus)
  }

  sendSessionBusMessage (message: EventMessage): void {
    this.sessionStorage.store('lorentz-event-bus', JSON.stringify(message))
  }

  sendLocalBusMessage (message: EventMessage): void {
    this.localStorage.store('lorentz-event-bus', JSON.stringify(message))
  }

  clearSessionBusMessage (): void {
    this.sessionStorage.clear('lorentz-event-bus')
  }

  clearLocalBusMessage (): void {
    this.localStorage.clear('lorentz-event-bus')
  }

  observeEventBus (id: string): Observable<EventMessage> {
    return fromEvent(window, 'lorentz-event-bus').pipe(
      map((e: any) => e.detail),
      filter((m: EventMessage) => m.to === id || m.to === 'ALL')
    )
  }

  observeSessionEventBus (id: string): Observable<EventMessage> {
    return merge(
      of(this.sessionStorage.retrieve('lorentz-event-bus')),
      this.sessionStorage.observe('lorentz-event-bus')
    ).pipe(
      map((e: any) => JSON.parse(e)),
      filter((m: EventMessage) => m.to === id || m.to === 'ALL')
    )
  }

  observeLocalEventBus (id: string): Observable<EventMessage> {
    return merge(
      of(this.localStorage.retrieve('lorentz-event-bus')),
      this.localStorage.observe('lorentz-event-bus')
    ).pipe(
      map((e: any) => JSON.parse(e)),
      filter((m: EventMessage) => m.to === id || m.to === 'ALL')
    )
  }
}
