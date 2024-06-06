import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { CognitosReducers } from './state/cognito.reducer'
import { COGNITO_KEY } from './state/cognito.selector'
import { IsAuthenticatedDirective } from './directive/is-authenticated.directive'
import { IsNotAuthenticatedDirective } from './directive/is-not-authenticated.directive'
import { CheckRolesDirective } from './directive/check-roles.directive'



@NgModule({
  declarations: [
    IsAuthenticatedDirective,
    IsNotAuthenticatedDirective,
    CheckRolesDirective

  ],
  imports: [
    StoreModule.forFeature(COGNITO_KEY, CognitosReducers)
  ],
  exports: [

  ]
})
export class LorentzCognitoModule { }
