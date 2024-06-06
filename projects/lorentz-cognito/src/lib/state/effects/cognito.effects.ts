import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { exhaustMap, from, map } from 'rxjs'
import { CognitoActions } from '../actions/cognito.actions'

@Injectable()
export class CognitoEffects {

  // userData$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CognitoActions.is_authenticated),
  //     exhaustMap(() => from(this.keycloakService.loadCognitoProfile()).pipe(
  //       map(u => CognitoActions.store_user({ u }))
  //     ))
  //   )
  // })
  //
  // userRoles$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CognitoActions.store_user),
  //     map(() => this.keycloakService.getCognitoRoles()),
  //     map(r => CognitoActions.store_roles({ r }))
  //   )
  // })
  //
  // logoutCognito$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CognitoActions.is_not_authenticated),
  //     exhaustMap(() => from(this.keycloakService.logout()).pipe(
  //       map(() => [
  //         CognitoActions.clear_user(),
  //         CognitoActions.clear_roles()
  //       ])
  //     ))
  //   )
  // })

  constructor (
    private readonly actions$: Actions) {
  }
}
