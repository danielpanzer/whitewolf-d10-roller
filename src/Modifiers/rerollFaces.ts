import { Modifier } from './modifier'
import { Face } from '../Models/die'

export interface RerollFaces extends Modifier {
  readonly rerolledFaces: Set<Face>;
}
