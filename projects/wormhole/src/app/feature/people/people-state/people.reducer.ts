import { ActionReducerMap } from "@ngrx/store";
import { PEOPLE_KEY } from "./people.selector";
import { PersonReducers } from "./reducers";

export interface PeopleState {
    personState: PersonReducers.PersonState
}

export interface PeopleModuleState {
    [PEOPLE_KEY]: PeopleState
}

export const PeopleReducers: ActionReducerMap<PeopleState> = {
    personState: PersonReducers.personReducer
}
