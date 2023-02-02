import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import { ECategory } from '../../games.model';
import { dashboardActionTypes } from '../actions/dashboard.actions';
import { IGamesState, initialState } from '../dashboard.state';

export const gameFeatureKey = 'game-key';

const _gameReducer = createReducer(
  initialState,
  on(dashboardActionTypes.loadGames, (state, props): IGamesState => {
    return {
      ...state,
      isLoadingWhileGetting: props.isLoading,
    };
  }),
  on(dashboardActionTypes.gamesLoaded, (state, props): IGamesState => {
    return {
      ...state,
      games: props.allGames,
      isLoadingWhileGetting: false,
    };
  }),
  on(
    dashboardActionTypes.updateGamesStore,
    (state, { allGames }): IGamesState => {
      return {
        ...state,
        games: allGames,
        isLoadingWhileGetting: false,
      };
    }
  ),
  on(dashboardActionTypes.gamesLoadedFail, (state): IGamesState => {
    return {
      ...state,
      isLoadingWhileGetting: false,
    };
  }),

  // Jackpot Reducers
  on(dashboardActionTypes.loadJackpots, (state, props): IGamesState => {
    return {
      ...state,
      isLoadingWhileGetting: props.isLoading,
    };
  }),
  on(dashboardActionTypes.jackpotsLoaded, (state, props): IGamesState => {
    return {
      ...state,
      jackpots: props.jackpots,
      isLoadingWhileGetting: false,
    };
  }),
  on(dashboardActionTypes.gameWithJackpot, (state, props): IGamesState => {
    return {
      ...state,
      gamesWithAmount: props.allGames,
    };
  }),
  on(
    dashboardActionTypes.updateJackpotsStore,
    (state, { jackpots }): IGamesState => {
      return {
        ...state,
        jackpots,
        isLoadingWhileGetting: false,
      };
    }
  ),
  on(dashboardActionTypes.jackpotsLoadedFails, (state): IGamesState => {
    return {
      ...state,
      isLoadingWhileGetting: false,
    };
  }),
  on(dashboardActionTypes.newGames, (state, props): IGamesState => {
    const NewfilteredGames = state.games.map((game) => {
      game.categories.map((category) => category === ECategory.New);
    });
    return {
      ...state,
    };
  }),
  on(dashboardActionTypes.gameWithJackpot, (state, props): IGamesState => {
    return {
      ...state,
      games: props.allGames,
      isLoadingWhileGetting: false,
    };
  })
);
export function gamesReducer(state, action) {
  return _gameReducer(state, action);
}
