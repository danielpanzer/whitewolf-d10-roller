import { Modifier } from './Modifier'
import { Face } from '../Models/Die'

export interface RerollFaces extends Modifier {
  readonly rerolledFaces: Set<Face>;
}
