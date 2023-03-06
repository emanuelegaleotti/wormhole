import { Action, createReducer, on, State } from "@ngrx/store"
import { Starship } from "../../starship.model"
import { StarshipActions } from "../actions"

export interface StarshipState {
    starships: Starship[]
    isLoading: boolean
    allStarships: number
    currentPage: number
    starshipId: string,
    starship: Starship | null
}

const initialState: StarshipState = {
    starships: [],
    isLoading: false,
    allStarships: 0,
    currentPage: 1,
    starshipId: '',
    starship: null
}

const reducer = createReducer(
    initialState,
    on(StarshipActions.storeStarships, (state, action): StarshipState => ({ ...state, starships: action.s })),
    on(StarshipActions.successGetStarships, (state, action): StarshipState => ({ ...state, starships: action.s, allStarships: action.as })),
    on(StarshipActions.throwStarships, (state): StarshipState => ({ ...state, starships: [] })),
    on(StarshipActions.storeCurrentPage, (state, action): StarshipState => ({ ...state, currentPage: action.p })),
    on(StarshipActions.throwCurrentPage, (state): StarshipState => ({ ...state, currentPage: 1 })),
    on(StarshipActions.storePlanetsAmount, (state, action): StarshipState => ({ ...state, allStarships: action.p })),
    on(StarshipActions.throwPlanetsAmount, (state): StarshipState => ({ ...state, allStarships: 0 })),
    on(StarshipActions.storeStarship, (state, action): StarshipState => ({ ...state, starship: action.s })),
    on(StarshipActions.successGetStarship, (state, action): StarshipState => ({ ...state, starship: action.s })),
    on(StarshipActions.throwStarship, (state): StarshipState => ({ ...state, starship: null })),
    on(StarshipActions.storeStarshipId, (state, action): StarshipState => ({ ...state, starshipId: action.id })),
    on(StarshipActions.throwStarshipId, (state): StarshipState => ({ ...state, starshipId: '' }))
)

export function starshipReducer(state: StarshipState | undefined, action: Action): StarshipState {
    return reducer(state, action)
}