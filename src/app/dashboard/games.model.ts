export interface IGames {
  categories: string[];
  name: string;
  image: string;
  id: string;
}

export interface IJackpot {
  game: string;
  amount: number;
}

export enum ECategory {
  New = 'new',
  Slots = 'slots',
  Top = 'top',
}
