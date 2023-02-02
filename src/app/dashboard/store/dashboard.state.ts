import { IGames, IJackpot } from '../games.model';

export interface IGamesState {
  games: IGames[];
  newGames: IGames[];
  isLoadingWhileGetting: boolean;
  jackpots: IJackpot[];
  gamesWithAmount: IGames[];
}
export const initialState: IGamesState = {
  games: [],
  newGames: [],
  isLoadingWhileGetting: false,
  jackpots: [],
  gamesWithAmount: [],
};
