import { createFeatureSelector } from "@ngrx/store"
import { PeopleModuleState, PeopleState } from "./people.reducer"

export const PEOPLE_KEY = 'people-module'

export const selectPeoplesModuleState = createFeatureSelector<PeopleModuleState, PeopleState>(PEOPLE_KEY)