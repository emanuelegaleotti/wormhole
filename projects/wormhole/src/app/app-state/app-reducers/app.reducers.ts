import { ActionReducerMap } from "@ngrx/store";
import { LoaderState } from '../../core/loader/loader-state/reducers/loader.reducer'
import { loaderReducers } from '../../core/loader/loader-state/reducers'

export interface AppState {
loaderState: LoaderState
}

export const AppReducer: ActionReducerMap<AppState> = {
  loaderState: loaderReducers.loaderReducer
}
