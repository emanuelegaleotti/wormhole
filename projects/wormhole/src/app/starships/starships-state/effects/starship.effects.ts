import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, concatLatestFrom } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of, tap, withLatestFrom } from "rxjs";
import { StarshipsService } from "../../starships.service";
import { StarshipActions } from "../actions";
import { StarshipsSelector } from "../selectors";
import { StarshipsModuleState } from "../starships.reducer";

@Injectable()
export class StarshipsEffects {

    initStarships$ = createEffect(() => { return this.actions$.pipe(
        ofType(StarshipActions.initStarships),
        concatLatestFrom(() => this.store.select(StarshipsSelector.selectCurrentPage)),
        mergeMap(([action, page]) => this.starshipsService.getStarships(page as number)
            .pipe(
                map(r => StarshipActions.successGetStarships({ s: r.results, as: r.count })),
                catchError(() => EMPTY)
            )
        ),
    ) }
    )

    loadStarships$ = createEffect(() => { return this.actions$.pipe(
        ofType(StarshipActions.storeCurrentPage),
        mergeMap((action) => this.starshipsService.getStarships(action.p)
            .pipe(
                map(r => StarshipActions.successGetStarships({ s: r.results, as: r.count })),
                catchError(() => EMPTY)
            )
        ),
    ) })

    constructor(
        private actions$: Actions,
        private starshipsService: StarshipsService,
        private store: Store<StarshipsModuleState>
    ) { }
}