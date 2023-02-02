import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGames } from '../../games.model';
import { IGamesState } from '../dashboard.state';
import { gameFeatureKey } from '../reducers/dashboard.reducers';

export const selectFeature = createFeatureSelector<IGamesState>(gameFeatureKey);

export const getAllGames = createSelector(
  selectFeature,
  (gameState) => gameState.games
);

export const selectJackpots = createSelector(
  selectFeature,
  (jackpotState) => jackpotState.jackpots
);

export const selectGamesWithjackpotAmount = createSelector(
  selectFeature,
  (gameState) => gameState.gamesWithAmount
);

export const gamesWithJackpotAmount = createSelector(
  getAllGames,
  selectJackpots,
  (games, jackpots) => {
    let finalUpdatedArrayOfGames: IGames[] = [];
    games.forEach((game) => {
      const gamesIndex = jackpots.findIndex((j) => game.id === j.game);
      const gamesFind = jackpots.find((j) => game.id === j.game);
      if (gamesIndex > -1) {
        finalUpdatedArrayOfGames.push({
          ...game,
          jackpotAmount: gamesFind.amount,
        });
      } else {
        finalUpdatedArrayOfGames.push(game);
      }
    });
    return finalUpdatedArrayOfGames;
  }
);

export const jackpotGames = createSelector(
  getAllGames,
  selectJackpots,
  (games, jackpots) => {
    let finalUpdatedArrayOfJackpotGames: IGames[] = [];
    games.forEach((game) => {
      const gamesIndex = jackpots.findIndex((j) => game.id === j.game);
      const gamesFind = jackpots.find((j) => game.id === j.game);
      if (gamesIndex > -1) {
        finalUpdatedArrayOfJackpotGames.push({
          ...game,
          jackpotAmount: gamesFind.amount,
        });
      }
    });
    return finalUpdatedArrayOfJackpotGames;
  }
);

export const selectFilteredGames = (selectedGame: string) =>
  createSelector(gamesWithJackpotAmount, (games) => {
    let filteredGames: IGames[] = [];
    games.forEach((game) => {
      game.categories.filter((category) => {
        if (selectedGame === 'other') {
          if (
            category === 'ball' ||
            category === 'virtual' ||
            category === 'fun'
          ) {
            filteredGames.push(game);
          }
        } else {
          if (category === selectedGame) {
            filteredGames.push(game);
          }
        }
      });
    });
    return filteredGames;
  });
