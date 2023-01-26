import { GamesService } from '../../service/games.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { dashboardActionTypes } from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(dashboardActionTypes.loadGames),
      concatMap(() => this.gameService.getGamesList()),
      map((allGames) => dashboardActionTypes.gamesLoaded({ allGames }))
    )
  );

  constructor(private gameService: GamesService, private actions$: Actions) {}
}
