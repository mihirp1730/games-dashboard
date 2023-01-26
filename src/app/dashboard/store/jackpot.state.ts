import { IJackpot } from '../games.model';

export interface IJackpotState {
  jackpots: IJackpot[];
  isLoadingWhileGetting: boolean;
}

export const initialState: IJackpotState = {
  jackpots: [],
  isLoadingWhileGetting: false,
};
