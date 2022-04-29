import { Modifier } from './modifier'
import { Face } from '../Models/die'

export interface DoubleFaces extends Modifier {
  readonly doubledFaces: Set<Face>;
}
