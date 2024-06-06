import { createFeatureSelector } from "@ngrx/store"
import {  PeopleState } from "./people.reducer"

export const PEOPLE_KEY = 'people-module'

export const selectPeoplesModuleState = createFeatureSelector<PeopleState>(PEOPLE_KEY)
