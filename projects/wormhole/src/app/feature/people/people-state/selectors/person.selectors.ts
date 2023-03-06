import { createSelector } from "@ngrx/store";
import { PeopleState } from "../people.reducer";
import { selectPeoplesModuleState } from "../people.selector";
import { PersonState } from "../reducers/person.reducers";

export const selectPersonState = createSelector(
    selectPeoplesModuleState,
    (s: PeopleState): PersonState => s.personState
)
export const selectCurrentPage = createSelector(
    selectPersonState,
    (s: PersonState): number => s.currentPage ?? 0
)
