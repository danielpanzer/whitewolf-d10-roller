import { Roller } from './Roller';
import { Face } from '../Models/Die'
import { Roll } from '../Models/Roll'
import { Modifier } from '../Modifiers/Modifier'

//TODO: To be implemented
export class ProductionRoller implements Roller {

  roll(dice: number, modifiers: Modifier[]): Roll {
    return {
      dice: [],
      target: Face.Seven,
      autoSuccesses: 0
    }
  }
}
