import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IJackpotState } from '../jackpot.state';
import { jackpotFeatureKey } from '../reducers/jackpot.reducers';
import { getAllGames } from './dashboard.selectors';

export const selectFeature =
  createFeatureSelector<IJackpotState>(jackpotFeatureKey);

export const selectJackpots = createSelector(
  selectFeature,
  (JackpotState) => JackpotState.jackpots
);

export const deduceJackpots = createSelector(
  selectJackpots,
  selectFeature,
  (jackpots) => {
    return jackpots;
  }
);
