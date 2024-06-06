import { ActionReducerMap } from "@ngrx/store";
import { COGNITO_KEY } from './cognito.selector'
import { CognitoReducers } from './reducers'


export interface CognitosState {
    cognitoState: CognitoReducers.CognitoState
}

export interface CognitoModuleState {
    [COGNITO_KEY]: CognitosState
}

export const CognitosReducers: ActionReducerMap<CognitosState> = {
    cognitoState: CognitoReducers.cognitoReducer
}
