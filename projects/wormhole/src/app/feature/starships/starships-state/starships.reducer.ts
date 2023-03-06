import { ActionReducerMap } from "@ngrx/store";
import { StarshipReducers } from "./reducers";
import { STARSHIPS_KEY } from "./starships.selector";

export interface StarshipsState {
    starshipState: StarshipReducers.StarshipState
}

export interface StarshipsModuleState {
    [STARSHIPS_KEY]: StarshipsState
}

export const StarshipsReducers: ActionReducerMap<StarshipsState> = {
    starshipState: StarshipReducers.starshipReducer
}
