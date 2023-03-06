import { createSelector } from "@ngrx/store";
import { Observable } from "rxjs";
import { Starship } from "../../starship.model";
import { StarshipState } from "../reducers/starship.reducers";
import { StarshipsModuleState, StarshipsState } from "../starships.reducer";
import { selectStarshipsModuleState, STARSHIPS_KEY } from "../starships.selector";

export const selectStarshipsState = createSelector(
    selectStarshipsModuleState,
    (s: StarshipsState): StarshipState => s.starshipState
)

export const selectStarships = createSelector(
    selectStarshipsState,
    (s: StarshipState): Starship[] => s.starships ?? []
)

export const selectAllStarships = createSelector(
    selectStarshipsState,
    (s: StarshipState): number => s.allStarships ?? 0
)

export const selectCurrentPage = createSelector(
    selectStarshipsState,
    (s: StarshipState): number => s.currentPage ?? 0
)
export const selectStarship = createSelector(
    selectStarshipsState,
    (s: StarshipState): Starship | null => s.starship
)
