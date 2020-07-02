import {Score} from './game.interface';

export interface Profile {
  firstname?: string;
  lastname?: string;
  displayName?: string;
  age?: number;
  avatar?: string;
  scores?: Score[];
}
