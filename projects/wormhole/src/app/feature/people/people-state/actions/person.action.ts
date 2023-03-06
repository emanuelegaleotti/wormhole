import { createAction, props } from '@ngrx/store'

export const storeCurrentPage = createAction('[PEOPLE] store current page', props<{ p: number }>())
export const throwCurrentPage = createAction('[PEOPLE] throw current page')