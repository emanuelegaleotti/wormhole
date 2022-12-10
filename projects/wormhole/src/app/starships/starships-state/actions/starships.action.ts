import { createAction, props } from "@ngrx/store";
import { Starship } from "../../starship.model";

const storeStarships = createAction('[STARSHIPS] store starships', props<{ s: Starship[] }>());
const throwStarships = createAction('[STARSHIPS] throw starships');
const successGetStarships = createAction('[STARSHIPS] success get starships', props<{ s: Starship[] }>());
const errorGetStarships = createAction('[STARSHIPS] error get starships');
const storeCurrentPage = createAction('[STARSHIPS] store current page', props<{ p: number }>());
const throwCurrentPage = createAction('[STARSHIPS] throw current page');
const storePages = createAction('[STARSHIPS] store pages', props<{ p: number[] }>());
const throwPages = createAction('[STARSHIPS] throw pages');
const storeStarship = createAction('[STARSHIPS] store starship', props<{ s: Starship }>());
const throwStarship = createAction('[STARSHIPS] throw starship');
const storeStarshipId = createAction('[STARSHIPS] store starship id', props<{ id: string }>());
const throwStarshipId = createAction('[STARSHIPS] throw starship id');
const successGetStarship = createAction('[STARSHIPS] success get starship', props<{ s: Starship }>());
const errorGetStarship = createAction('[STARSHIPS] error get starship');