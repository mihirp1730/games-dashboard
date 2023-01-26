import { createAction, props } from '@ngrx/store';
import { IJackpot } from '../../games.model';

export const loadJackpots = createAction(
  '[Jackpots List] Load Jackpots via Service'
);

export const jackpotsLoaded = createAction(
  '[Jackpots List] Jackpots Loaded Successfully',
  props<{ jackpots: IJackpot[] }>()
);

export const jackpotsLoadedFails = createAction(
  '[Jackpots List] Jackpots Loaded Fail',
  props<{ errorMessage: string | null }>()
);
