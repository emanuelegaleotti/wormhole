import {  createActionGroup, emptyProps, props } from '@ngrx/store'

export const CognitoActions = createActionGroup({
  source: 'USER',
  events: {
    'is_authenticated': emptyProps(),
    'is_not_authenticated': emptyProps(),
    'store_user': props<{ u: any }>(),
    'clear_user': emptyProps(),
    'store_roles': props<{ r: string[] }>(),
    'clear_roles': emptyProps(),
  }
})

