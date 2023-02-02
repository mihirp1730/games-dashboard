import { createAction, props } from '@ngrx/store';
import { IGames, IJackpot } from '../../games.model';

export const loadGames = createAction(
  '[Games List] Load Games via Service',
  props<{ isLoading: boolean }>()
);
export const gamesLoaded = createAction(
  '[Games List] Games Loaded Successfully',
  props<{ allGames: IGames[] }>()
);

export const updateGamesStore = createAction(
  '[Jackpot List] Update Jackpot in store',
  props<{ allGames: IGames[] }>()
);

export const gamesLoadedFail = createAction(
  '[Games List] Games Loaded Fail',
  props<{ errorMessage: string | null }>()
);

export const validateGamesLoaded = createAction(
  '[Games List] Games Loaded validation',
  props<{ allGames: IGames[] }>()
);

export const newGames = createAction(
  '[Games List] New Games set Successfully',
  props<{ newGames: IGames[] }>()
);

export const addJackpotAmount = createAction(
  '[Game List] Add jackpot Amount with games object',
  props<{ allGames: IGames[] }>()
);

// Jackpot actions.
export const loadJackpots = createAction(
  '[Jackpots List] Load Jackpots via Service',
  props<{ isLoading: boolean }>()
);

export const updateJackpotsStore = createAction(
  '[Jackpot List] Update Jackpot in store',
  props<{ jackpots: IJackpot[] }>()
);

export const jackpotsLoaded = createAction(
  '[Jackpots List] Jackpots Loaded Successfully',
  props<{ jackpots: IJackpot[] }>()
);

export const jackpotsLoadedFails = createAction(
  '[Jackpots List] Jackpots Loaded Fail',
  props<{ errorMessage: string | null }>()
);

export const gameWithJackpot = createAction(
  '[Games with Jackpot List] Games with Jackpot Loaded',
  props<{ allGames: IGames[] }>()
);

export const dashboardActionTypes = {
  loadGames,
  gamesLoaded,
  gamesLoadedFail,
  newGames,
  validateGamesLoaded,
  addJackpotAmount,
  updateGamesStore,

  // jackpot actions
  loadJackpots,
  updateJackpotsStore,
  jackpotsLoaded,
  jackpotsLoadedFails,

  // Combine
  gameWithJackpot,
};
