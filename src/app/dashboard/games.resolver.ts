import { areGamesLoaded } from './store/selectors/dashboard.selectors';
import { loadGames } from './store/actions/dashboard.actions';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';
import { loadJackpots } from './store/actions/jackpot.actions';
import { selectJackpots } from './store/selectors/jackpot.selectors';

@Injectable()
export class GameResolver implements Resolve<Observable<any>> {
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areGamesLoaded),
      tap((gamesLoaded) => {
        if (!gamesLoaded) {
          this.store.dispatch(loadGames());
        }
      }),
      filter((gamesLoaded) => gamesLoaded),
      first()
    );
  }
}

@Injectable()
export class JackpotResolver implements Resolve<Observable<any>> {
  constructor(private store: Store) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(selectJackpots),
      tap((jackpotsLoaded) => {
        if (!jackpotsLoaded) {
          this.store.dispatch(loadJackpots());
        }
      })
    );
  }
}
