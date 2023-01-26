import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GamesState, selectAll } from '../reducers/dashboard.reducers';

export const gameFeatureSelector = createFeatureSelector<GamesState>('games');

export const getAllGames = createSelector(gameFeatureSelector, selectAll);

export const areGamesLoaded = createSelector(
  gameFeatureSelector,
  (state) => state.gamesLoaded
);
