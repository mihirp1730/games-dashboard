export interface IGames {
  categories: string[];
  name: string;
  image: string;
  id: string;
  jackpotAmount?: number;
  jackpots: IJackpot[];
  updatedNewGames: IGames[];
}

export interface IGetGames {
  allGames: IGames[];
}
export interface IJackpot {
  game: string;
  amount: number;
}

export interface IGetJackpot {
  jackpots: IJackpot[];
}

export enum ECategory {
  New = 'new',
  Slots = 'slots',
  Top = 'top',
  Jackpot = 'jackpot',
  Live = 'live',
  Blackjack = 'blackjack',
  Roulette = 'roulette',
  Table = 'table',
  Poker = 'poker',
  Other = 'other',
}
