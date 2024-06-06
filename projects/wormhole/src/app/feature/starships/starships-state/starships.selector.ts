import { createFeatureSelector } from "@ngrx/store"
import { StarshipsModuleState, StarshipsState } from "./starships.reducer"

export const STARSHIPS_KEY = 'starships-module'

export const selectStarshipsModuleState = createFeatureSelector< StarshipsState>(STARSHIPS_KEY)
