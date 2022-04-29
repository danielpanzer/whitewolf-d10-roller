import { Roller } from './Roller';
import { Face } from '../Models/Die'
import { Roll } from '../Models/Roll'
import { Modifier } from '../Modifiers/Modifier'

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
