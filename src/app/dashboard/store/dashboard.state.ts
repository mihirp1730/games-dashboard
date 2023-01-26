import { IGames } from '../games.model';

export interface IGamesState {
  games: IGames[];
  selectedGames: IGames;
}
export interface GamesState {
  games: null;
  selectedGames: null;
}
