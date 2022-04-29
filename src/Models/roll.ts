import { Die, Face } from './die'

export type Roll = {
  dice: Die[];
  target: Face;
  autoSuccesses: number;
}
