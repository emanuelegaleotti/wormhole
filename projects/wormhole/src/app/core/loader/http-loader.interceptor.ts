import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http'
import { catchError, finalize, Observable, throwError } from 'rxjs'
import { Store } from '@ngrx/store'
import { LoaderActions } from './loader-state/actions'

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {

  constructor(
    private readonly store: Store
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(LoaderActions.openLoader())
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(LoaderActions.closeLoader())
        return throwError(error)
      }),
      finalize(()=> {
        this.store.dispatch(LoaderActions.closeLoader())
      })
    )
  }
}
