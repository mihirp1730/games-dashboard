import { GamesService } from '../../service/games.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, mergeMap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { dashboardActionTypes } from '../actions/dashboard.actions';
import { IGames } from '../../games.model';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {
  newCategoryGames: IGames[] = [];

  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActionTypes.loadGames),
      concatMap(() => this.gameService.getGamesList()),
      map(
        (allGames) => dashboardActionTypes.gamesLoaded({ allGames }),
        catchError((err: HttpErrorResponse) => {
          console.error(
            'An error occured while getting jackpot list',
            err.message
          );
          return of(
            dashboardActionTypes.gamesLoadedFail({ errorMessage: null })
          );
        })
      )
    )
  );

  // Jackpot Effects
  loadJackpots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActionTypes.loadJackpots),
      mergeMap(() =>
        this.gameService.getJackpots().pipe(
          map((res: any) => {
            return dashboardActionTypes.jackpotsLoaded({
              jackpots: res,
            });
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(
              'An error occured while getting jackpot list',
              err.message
            );
            return of(
              dashboardActionTypes.jackpotsLoadedFails({ errorMessage: null })
            );
          })
        )
      )
    )
  );

  constructor(
    private gameService: GamesService,
    private actions$: Actions,
    public store: Store
  ) {}
}
