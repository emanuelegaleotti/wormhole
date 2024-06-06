import { createFeatureSelector } from "@ngrx/store"
import { CognitoModuleState, CognitosState, } from './cognito.reducer'

export const COGNITO_KEY = 'cognito-module'

export const selectCognitoModuleState = createFeatureSelector<CognitosState>(COGNITO_KEY)
