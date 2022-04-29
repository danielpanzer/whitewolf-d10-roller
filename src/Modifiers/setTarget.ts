import { Modifier } from './Modifier'
import { Face } from '../Models/Die'

export interface SetTarget extends Modifier {
  readonly target: Face;
}
