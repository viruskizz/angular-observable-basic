export type Game = 'O2Jam' | 'Dota2' | 'Final Fantasy' | 'Sekiro';

export interface Score {
  game: Game | string;
  point: number;
}
