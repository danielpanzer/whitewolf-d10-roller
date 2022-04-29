import { Roller } from './roller';
import { Face } from '../Models/die'
import { Roll } from '../Models/roll'
import { Modifier } from '../Modifiers/modifier'

export class DeterministicRoller implements Roller {

  faces: Face[]

  constructor(faces: Face[]) {
    this.faces = faces
  }

  roll(dice: number, modifiers: Modifier[]): Roll {
    return {
      dice: Array
      .from(
        Array(dice).keys()
      )
      .map( index => {
        return {
          face: this.faces[index],
          isRerolled: false
        }
      }),
      target: Face.Seven,
      autoSuccesses: 0
    }
  }
}
