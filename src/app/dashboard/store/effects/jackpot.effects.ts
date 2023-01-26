import { GamesService } from '../../service/games.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, concatMap, delay, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  jackpotsLoaded,
  jackpotsLoadedFails,
  loadJackpots,
} from '../actions/jackpot.actions';
import { IJackpotState } from '../jackpot.state';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class JackpotsEffects {
  count = 0;
  loadJackpots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadJackpots),
      mergeMap(() =>
        this.gameService.getJackpots().pipe(
          delay(this.count * 1000),
          concatMap((res: IJackpotState) => {
            return [
              jackpotsLoaded({
                jackpots: res.jackpots,
              }),
            ];
          }),
          catchError((err: HttpErrorResponse) => {
            console.error(
              'An error occured while getting jackpot list',
              err.message
            );
            return of(jackpotsLoadedFails({ errorMessage: null }));
          })
        )
      )
    )
  );

  constructor(private gameService: GamesService, private actions$: Actions) {}
}
