import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http'
import { catchError, Observable, Subject, takeUntil, throwError } from 'rxjs'
import { HttpErrorComponent } from './http-error.component'
import { MatDialog } from '@angular/material/dialog'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private open: boolean = false

  constructor (
    private readonly dialog: MatDialog
  ) {}

  intercept (request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!this.open) {
          this.open = true
          const unsub = new Subject()
          const modalRef = this.dialog.open(
            HttpErrorComponent,
            {
              data:
                { error: error }
            })
          modalRef.afterClosed().pipe(
            takeUntil(unsub)
          ).subscribe(() => {
            this.open = false
            unsub.next('')
          })
        }
        return throwError(error)
      })
    )
  }
}
