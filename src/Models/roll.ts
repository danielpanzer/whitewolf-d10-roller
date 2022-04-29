import { Die, Face } from './Die'

export type Roll = {
  dice: Die[];
  target: Face;
  autoSuccesses: number;
}
