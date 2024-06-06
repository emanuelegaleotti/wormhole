import {createSelector} from "@ngrx/store";
import { selectCognitoModuleState } from '../cognito.selector'
import {  CognitosState } from '../cognito.reducer'
import { CognitoState } from '../reducers/cognito.reducers'



export const selectCognitoState = createSelector(
  selectCognitoModuleState,
  (s: CognitosState): CognitoState => s.cognitoState
)

export const selectIsAuthenticated = createSelector(
  selectCognitoState,
  (s: CognitoState): boolean => s.isAuthenticated
)
export const selectUser = createSelector(
  selectCognitoState,
  (s: CognitoState): any | null => s.user
)
export const selectRoles = createSelector(
  selectCognitoState,
  (s: CognitoState): string[] => s.roles
)

export const selectCheckRoles = (roles: string[], condition: 'AND' | 'OR') => createSelector(
  selectRoles,
  (r: string[]): boolean => {
    if (condition === 'AND') {
      return roles.map(role => r.includes(role)).every(b => b)
    } else {
      return roles.map(role => r.includes(role)).some(b => b)
    }
  }
)
