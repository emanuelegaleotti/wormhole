import { Action, createReducer, on, State } from "@ngrx/store"
import { PersonActions } from "../actions"

export interface PersonState {
    currentPage: number
}

const initialState: PersonState = {
    currentPage: 1,
}

const reducer = createReducer(
    initialState,
    on(PersonActions.storeCurrentPage, (state, action): PersonState => ({ ...state, currentPage: action.p })),
    on(PersonActions.throwCurrentPage, (state): PersonState => ({ ...state, currentPage: 1 })),
)

export function personReducer(state: PersonState | undefined, action: Action): PersonState {
    return reducer(state, action)
}