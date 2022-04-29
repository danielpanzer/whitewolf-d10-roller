import { Modifier } from './modifier'
import { Face } from '../Models/die'

export interface SetTarget extends Modifier {
  readonly target: Face;
}
