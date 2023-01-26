import { createAction, props } from '@ngrx/store';
import { IGames } from '../../games.model';

export const loadGames = createAction('[Games List] Load Games via Service');

export const gamesLoaded = createAction(
  '[Games List] Games Loaded Successfully',
  props<{ allGames: IGames[] }>()
);

export const gamesLoadedFail = createAction(
  '[Games List] Games Loaded Fail',
  props<{ errorMessage: string | null }>()
);

export const dashboardActionTypes = {
  loadGames,
  gamesLoaded,
  gamesLoadedFail,
};
